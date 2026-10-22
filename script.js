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

///prb reload


function remplirSeiges() {
    selectSiege.innerHTML = '<option value="">-- Automatique (1er libre) --</option>';
    NouveauSiege.innerHTML = '<option class="" >-- choisir un nouveau siege</option>';
    for (let i = 0; i < Totalplace - 1; i++) {
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
remplirSeiges();

let dataName = [];
let dataSeat = [];

function reservation() {

    const form = document.getElementById('formulaire');
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
            console.log('test')
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

        alert("Réservation enregistrée !");

        const targetPlace = document.getElementById(`place-${siegeFinal}`);

        targetPlace.classList.remove('bg-blue-200');
        targetPlace.classList.add('bg-orange-400');

        const statusPlace = targetPlace.querySelector('p');
        statusPlace.textContent = nom;


        let totalOccupe = dataSeat.length;
        placeOccupe.textContent = totalOccupe;

        let TotalLibre = 20 - totalOccupe ;
        placeLibre.textContent = (TotalLibre);


        let toltalrecet = totalOccupe * 80;
        resetTotal.textContent = (toltalrecet+'.00DH')


        console.log(dataSeat)
    });
}

reservation();
