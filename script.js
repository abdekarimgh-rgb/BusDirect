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

const cards = document.querySelectorAll('#card')
const cardLibre = document.getElementById('cardLibre');


//////////main

function remplirSeiges() {
    selectSiege.innerHTML = '<option value="">-- Automatique (1er libre) --</option>';
    NouveauSiege.innerHTML = '<option class="" >-- choisir un nouveau siege</option>';
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


var dataName = [];
var dataSeat = [];

function reservation() {

    const form = document.getElementById('form1');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let nom = nomPassager.value.trim();
        let siegeShoisi = selectSiege.value;
        if (nom === "") {
            alert('Entre un nom');
            return
        }

        if (dataName.includes(nom)) {
            alert('Le nom est deja existe');
            return;
        }

        let siegeFinal = null;

        //choisi un place

        if (siegeShoisi !== "") {
            siegeFinal = parseInt(siegeShoisi);
            if (dataSeat.includes(siegeFinal.toString())) {
                alert("cette place est deja reserve");
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
            alert('Aucun siege disponible');
            return;
        }

        dataName.push(nom);
        dataSeat.push(siegeFinal);

        nomPassager.value = "";
        selectSiege.value = "";

        alert("Réservation enregistrée !");

        const targetPlace = document.getElementById(`place-${siegeFinal}`);

        targetPlace.classList.remove('bg-blue-200');
        targetPlace.classList.add('bg-orange-400');

        const statusPlace = targetPlace.querySelector('p');
        statusPlace.textContent = nom;


        let totalOccupe = dataSeat.length;
        placeOccupe.textContent = totalOccupe;

        let TotalLibre = 20 - totalOccupe;
        placeLibre.textContent = (TotalLibre);


        let toltalrecet = totalOccupe * 80;
        resetTotal.textContent = (toltalrecet + '.00DH');

        remplisagePassagerModif();
    });

}


//remplissage===============================

function remplisagePassagerModif() {
    PassagerExistant.innerHTML = '<option value="">-- Nom de passager</option>';

    for (let i = 0; i < dataSeat.length; i++) {
        const option3 = document.createElement('option');
        option3.value = dataName[i];
        option3.textContent = dataName[i];
        PassagerExistant.appendChild(option3);
    }
}



//modification==============================

function modification() {
    const form2 = document.getElementById('form2');
    form2.addEventListener('submit', function (e) {
        e.preventDefault();

        let nomChoisi = PassagerExistant.value.trim();
        let nouveauNam = NomPassagerM.value.trim();
        let nouveauSiege = NouveauSiege.value;

        if (nomChoisi === "") {
            alert('choisir un dans la liste');
        }

        let position = dataName.indexOf(nomChoisi);
        let oldSiege = dataSeat[position];

        let nomfinal;
        if (nouveauNam !== "") {
            nomfinal = nouveauNam;
        }

        else {
            nomfinal = nomChoisi;
        }

        console.log(nomfinal + 'nomfinal')
        console.log(nouveauNam + 'nouveauNam')


        let siegeFinal;
        if (nouveauSiege !== "") {
            siegeFinal = nouveauSiege;
        }
        else {
            siegeFinal = oldSiege;
        }

        if (nouveauSiege !== "" && dataSeat.includes(siegeFinal) && siegeFinal !== oldSiege) {
            alert('cette place est deja reserve');
            return;
        }

        const XPlace = document.getElementById(`place-${oldSiege}`);
        
            XPlace.classList.remove('bg-orange-400');
            XPlace.classList.add('bg-blue-200');
            XPlace.querySelector('p').textContent = 'Libre';
        

        const NPlace = document.getElementById(`place-${siegeFinal}`);
        if(nomfinal !== ""){
            NPlace.classList.remove('bg-blue-200');
            NPlace.classList.add('bg-orange-400');
            NPlace.querySelector('p').textContent = nomfinal;
        }
        
        console.log(dataName + '/' + dataSeat)

        console.log("final> " + nomfinal)
        console.log("final> " + siegeFinal)

        dataName[position] = nomfinal;
        dataSeat[position] = siegeFinal;

        console.log("===>" + dataName[position])
        console.log("===>" + dataSeat[position])

        nouveauNam.value = "";
        nomChoisi.value = "";

        //remplirSeiges();
        remplisagePassagerModif();
    });
}

remplirSeiges();
reservation();
remplisagePassagerModif();
modification();



