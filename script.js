//element header

const placeLibre = document.getElementById('placeLibre');
const placeOccupe = document.getElementById('placeOccupe');
const resetTotal = document.getElementById('resetTotal');
const Totalplace = 20;

//element form

//Reservation d'un place

const nomPassager = document.getElementById('nomPassager');
const selectSiege = document.getElementById('selectSiege');
const confirmer = document.getElementById('confirmer');

//Modifier une place

const PassagerExistant = document.getElementById('PassagerExistant');
const NomPassagerM = document.getElementById('NomPassagerM');
const NouveauSiege = document.getElementById('NouveauSiege');
const Valider = document.getElementById('Valider');

//Supprimer une reservation

const PassagerReserve = document.getElementById('PassagerReserve');
const Supprimer = document.getElementById('Supprimer');

//element capined

const cards = document.querySelectorAll('.card')
const cardLibre = document.getElementById('cardLibre');

//////////main

function remplirSeiges() {
    selectSiege.innerHTML = '<option value="">-- Automatique (1er libre) --</option>';
    NouveauSiege.innerHTML = '<option value="" >-- choisir un nouveau siege</option>';
    for (let i = 0; i < Totalplace; i++) {
        const option1 = document.createElement('option');
        option1.value = i + 1;
        option1.textContent = `siege ${i + 1}`;
        selectSiege.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = i + 1;
        option2.textContent = `Siege ${i + 1}`;
        NouveauSiege.appendChild(option2);
    }
}

function message(text) {
    const formulaire = document.querySelector('#formulaire');
    const message = document.createElement('div');
    message.classList.add('messageStyle');
    message.textContent = text
    message.style.color = "white"
    formulaire.append(message);
    setTimeout(function () {
        message.remove();
    }, 1500)
}

var dataName = JSON.parse(localStorage.getItem("busNames")) || [];
var dataSeat = JSON.parse(localStorage.getItem("busSeats")) || [];

function returnStyle() {
    cards.forEach(function (element, index) {
        const targetPlace = document.getElementById(`place-${dataSeat[index]}`);
        if (targetPlace) {
            targetPlace.classList.remove('bg-blue-200');
            targetPlace.classList.add('bg-orange-400');

            const statusPlace = targetPlace.querySelector('p');
            statusPlace.textContent = dataName[index];
        }
    })
}

function adapteStyle() {
    cards.forEach(function (element) {
        let seat = parseInt(element.dataset.value)

        if (dataSeat.map(Number).includes(seat)) {
            element.classList.remove('bg-blue-200');
            element.classList.add('bg-orange-400');
        }
        else {
            element.classList.remove('bg-orange-400');
            element.classList.add('bg-blue-200');
            element.querySelector('.cardLibre').textContent = 'Libre'
        }
    })
}

let drag = null;

function dragDrop() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(function (card) {

        card.addEventListener('dragstart', function (e) {
            const testDrag = this.querySelector('.cardLibre').textContent

            if (testDrag === 'Libre') {
                message('la place est vide');
                return;
            }
            drag = card.querySelector('.cardLibre').textContent;
            //card.querySelector('.cardLibre').textContent = 'Libre'
        })

        card.addEventListener('dragend', function (e) {
            e.preventDefault();
            drag = null;

        })

        cards.forEach(function (element) {
            element.addEventListener('dragover', function (e) {
                e.preventDefault();
                element.style.backgroudColor = 'red'
            })
        });

        card.addEventListener('dragleave', function (e) {

        });

        card.addEventListener('drop', function () {
            const verificateurSeat = parseInt(card.dataset.value);

            if (dataSeat.map(Number).includes(verificateurSeat)) {
                message('place deja reserve!');
                return;
            }

            else {
                if (drag) {
                    let position = dataName.indexOf(drag);

                    dataName.splice(position, 1);
                    dataSeat.splice(position, 1);

                    let seat = this.dataset.value;
                    if (dataSeat.includes(parseInt(seat))) {
                        console.log('entrer')
                        return;
                    }
                    else {
                        dataName.push(drag);
                        dataSeat.push(seat);
                    
                    this.querySelector('.cardLibre').textContent = drag;

                    localStorage.setItem('busNames', JSON.stringify(dataName))
                    localStorage.setItem('busSeats', JSON.stringify(dataSeat))
                    adapteStyle();
                    }
                }
            }
        });
    });
}

dragDrop();

//adapteStyle();

function reservation() {

    const form = document.getElementById('form1');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let nom = nomPassager.value.trim();
        let siegeShoisi = selectSiege.value;

        if (nom === "") {
            message('Entre un nom')
            return;
        }

        if (dataName.includes(nom)) {
            message('Le nom est deja existe');
            return;
        }

        let siegeFinal = null;

        //choisi un place

        if (siegeShoisi !== "") {
            siegeFinal = parseInt(siegeShoisi);
            if (dataSeat.includes(siegeFinal.toString())) {
                message("cette place est deja reserve")
                return;
            }
        }

        //place auto

        else {
            for (let i = 1; i <= Totalplace; i++) {
                if (!dataSeat.includes(i.toString())) {
                    siegeFinal = i.toString();
                    break;
                }
            }
        }

        if (dataSeat.length >= 20) {
            message('Aucun siege disponible')
            return;
        }

        dataName.push(nom);
        dataSeat.push(siegeFinal);

        localStorage.setItem("busNames", JSON.stringify(dataName));
        localStorage.setItem("busSeats", JSON.stringify(dataSeat));

        nomPassager.value = "";
        selectSiege.value = "";

        alert("Réservation enregistrée !");
        const targetPlace = document.getElementById(`place-${siegeFinal}`);
        if (targetPlace) {
            targetPlace.classList.remove('bg-blue-200');
            targetPlace.classList.add('bg-orange-400');
            const statusPlace = targetPlace.querySelector('p');
            statusPlace.textContent = nom;
        }

        let totalOccupe = dataSeat.length;
        placeOccupe.textContent = totalOccupe;

        let TotalLibre = 20 - totalOccupe;
        placeLibre.textContent = (TotalLibre);


        let toltalrecet = totalOccupe * 80;
        resetTotal.textContent = (toltalrecet + '.00DH');

        remplisagePassagerModif_Supp();
    });

}


//remplissage===============================

function remplisagePassagerModif_Supp() {

    PassagerExistant.innerHTML = '<option value="">-- Nom de passager</option>';
    PassagerReserve.innerHTML = '<option value="">--nom de de passager</option>';

    for (let i = 0; i < dataSeat.length; i++) {
        const option3 = document.createElement('option');
        option3.value = dataName[i];
        option3.textContent = dataName[i];
        PassagerExistant.appendChild(option3);


        const option4 = document.createElement('option');
        option4.value = dataName[i];
        option4.textContent = dataName[i];
        PassagerReserve.appendChild(option4);
    }
}



//modification==============================

function modification() {
    const form2 = document.getElementById('form2');
    form2.addEventListener('submit', function (e) {
        e.preventDefault();

        let nomChoisi = PassagerExistant.value;
        let nouveauNam = NomPassagerM.value.trim();
        let nouveauSiege = NouveauSiege.value;

        if (nouveauNam === "" && nouveauSiege === "") {
            message('remplis ou moins deux chemps!');
            return;
        }

        if (nomChoisi === "") {
            message('choisir un dans la liste');
            return;
        }

        let position = dataName.indexOf(nomChoisi);
        let oldSiege = dataSeat[position];

        let nomfinal;
        if (nouveauNam !== "") {
            nomfinal = nouveauNam;
            if (dataName.includes(nomfinal)) {
                message('le nom est deja existe');
                return;
            }
        }

        else {
            nomfinal = nomChoisi;
        }

        let siegeFinal;
        if (nouveauSiege !== "") {
            siegeFinal = nouveauSiege;
            console.log(siegeFinal)
        }
        else {
            siegeFinal = oldSiege;
        }

        if (nouveauSiege !== "" && dataSeat.includes(siegeFinal) && siegeFinal !== oldSiege) {
            message('cette place est deja reserve');
            return;
        }

        const XPlace = document.getElementById(`place-${oldSiege}`);
        if (XPlace) {
            XPlace.classList.remove('bg-orange-400');
            XPlace.classList.add('bg-blue-200');
            XPlace.querySelector('p').textContent = 'Libre';
        }

        const NPlace = document.getElementById(`place-${siegeFinal}`);
        if (NPlace) {
            NPlace.classList.remove('bg-blue-200');
            NPlace.classList.add('bg-orange-400');
            NPlace.querySelector('p').textContent = nomfinal;
        }
        alert('Modification termine');

        dataName[position] = nomfinal;
        dataSeat[position] = siegeFinal;

        localStorage.setItem("busNames", JSON.stringify(dataName));
        localStorage.setItem("busSeats", JSON.stringify(dataSeat));

        console.log(dataName)
        console.log(dataSeat)

        NomPassagerM.value = "";
        PassagerExistant.value = "";
        NouveauSiege.value = "";

        console.log(dataName)
        console.log(dataSeat)

        remplirSeiges();
        remplisagePassagerModif_Supp();
    });
}

function suppression() {
    const form3 = document.getElementById('form3');
    form3.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log(PassagerReserve.value);
        let nomChoisi = PassagerReserve.value;

        if (nomChoisi === "") {
            message('selectionne un nom');
            return;
        }

        let positionNam = dataName.indexOf(nomChoisi);
        if (positionNam === -1) {
            message("cette nom n'existe pas");
            return;
        }
        let Siege = dataSeat[positionNam];

        alert(`supprimer la place de ${dataName[positionNam]}`);

        dataName.splice(positionNam, 1);
        dataSeat.splice(positionNam, 1);

        localStorage.setItem("busNames", JSON.stringify(dataName));
        localStorage.setItem("busSeats", JSON.stringify(dataSeat));

        let totalOccupe = dataSeat.length;
        placeOccupe.textContent = totalOccupe;

        let TotalLibre = 20 - totalOccupe;
        placeLibre.textContent = (TotalLibre);


        let toltalrecet = totalOccupe * 80;
        resetTotal.textContent = (toltalrecet + '.00DH');

        const supp = document.getElementById(`place-${Siege}`);
        console.log(`place-${Siege}`);
        if (supp) {
            supp.classList.remove('bg-orange-400');
            supp.classList.add('bg-blue-200');
            supp.querySelector('p').textContent = 'Libre';
        }

        remplisagePassagerModif_Supp();
    });
}


returnStyle();
remplirSeiges();
reservation();
remplisagePassagerModif_Supp();
modification();
suppression();
adapteStyle();