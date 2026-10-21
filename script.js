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

const cards = document.getElementById('card')
const cardLibre = document.getElementById('cardLibre');

//main



function remplirPassagerReserve(){
    selectSiege.innerHTML = '<option value="">-- Automatique (1er libre) --</option>';
    NouveauSiege.innerHTML = '<option class="" >-- choisir un nouveau siege</option>';
    for(let i = 0 ; i < Totalplace-1 ; i++){
        const option1= document.createElement('option');
        option1.value = i+1;
        option1.textContent = `siege ${i+1}`;
        selectSiege.appendChild(option1);
        console.log(selectSiege)


        const option2 = document.createElement('option');
        option2.value = i+1;
        option2.textContent = `Siege ${i+1}`;
        NouveauSiege.appendChild(option2);
    }
}
remplirPassagerReserve()