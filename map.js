// ==========================================
// FS25 MANAGER - map.js
// ==========================================

// Numéro de la map sélectionnée
const mapIndex = Number(localStorage.getItem("selectedMap")) || 0;

// Liste des maps
let maps = JSON.parse(localStorage.getItem("maps")) || [];

// Si aucune map n'existe
if (maps.length === 0) {

    maps.push({

        nom: "Ma première map",
        image: "images/map.jpg",
        argent: 20000,
        notes: "",
        animaux: [],
        activites: []

    });

    localStorage.setItem("maps", JSON.stringify(maps));

}

const map = maps[mapIndex];

// =============================
// AFFICHAGE
// =============================

document.getElementById("nomMap").textContent = map.nom;

document.getElementById("imageMap").src = map.image;

actualiserArgent();

document.getElementById("notes").value = map.notes || "";

// =============================
// ARGENT
// =============================

function actualiserArgent(){

    document.getElementById("argentMap").textContent =
        map.argent.toLocaleString("fr-FR") + " €";

}

function ajouterArgent(){

    const montant = Number(document.getElementById("montant").value);

    if(montant <= 0) return;

    map.argent += montant;

    sauvegarder();

    actualiserArgent();

    document.getElementById("montant").value="";

}

function retirerArgent(){

    const montant = Number(document.getElementById("montant").value);

    if(montant <=0) return;

    map.argent -= montant;

    sauvegarder();

    actualiserArgent();

    document.getElementById("montant").value="";

}

// =============================
// NOTES
// =============================

document.getElementById("notes").addEventListener("input",function(){

    map.notes=this.value;

    sauvegarder();

});

// =============================
// CASES À COCHER
// =============================

const checkbox = document.querySelectorAll("input[type='checkbox']");

checkbox.forEach(box=>{

    if(map.activites.includes(box.parentElement.textContent.trim()) ||
       map.animaux.includes(box.parentElement.textContent.trim())){

        box.checked=true;

    }

    box.addEventListener("change",function(){

        sauvegarderCases();

    });

});

function sauvegarderCases(){

    map.activites=[];

    map.animaux=[];

    checkbox.forEach(box=>{

        if(box.checked){

            const texte = box.parentElement.textContent.trim();

            if(

                texte.includes("Vaches") ||

                texte.includes("Moutons") ||

                texte.includes("Poules") ||

                texte.includes("Cochons") ||

                texte.includes("Chevaux")

            ){

                map.animaux.push(texte);

            }

            else{

                map.activites.push(texte);

            }

        }

    });

    sauvegarder();

}

// =============================
// SAUVEGARDE
// =============================

function sauvegarder(){

    maps[mapIndex]=map;

    localStorage.setItem("maps",JSON.stringify(maps));

}

console.log("Map chargée :",map.nom);
