// =============================
// FS25 Manager - Admin.js
// =============================

// Identifiants par défaut
let adminUsername = localStorage.getItem("adminUsername") || "admin";
let adminPassword = localStorage.getItem("adminPassword") || "routier12345";

// Liste des maps
let maps = JSON.parse(localStorage.getItem("maps")) || [];

// =============================
// CONNEXION
// =============================

function login() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === adminUsername && password === adminPassword) {

        document.getElementById("login").style.display = "none";
        document.getElementById("adminPanel").style.display = "block";

        alert("Bienvenue " + username + " !");

    } else {

        alert("Identifiant ou mot de passe incorrect.");

    }

}

// =============================
// AJOUTER UNE MAP
// =============================

function ajouterMap() {

    const nom = prompt("Nom de la nouvelle map :");

    if (!nom) return;

    const argent = Number(prompt("Argent de départ :", "20000"));

    maps.push({

        nom: nom,
        argent: argent,
        image: "",
        animaux: [],
        activites: [],
        notes: ""

    });

    sauvegarder();

    alert("Map ajoutée avec succès.");

}

// =============================
// MODIFIER UNE MAP
// =============================

function modifierMap() {

    if (maps.length === 0) {

        alert("Aucune map disponible.");

        return;

    }

    let liste = "";

    maps.forEach((map, index) => {

        liste += index + " - " + map.nom + "\n";

    });

    const id = Number(prompt(liste + "\n\nNuméro de la map :"));

    if (isNaN(id) || !maps[id]) return;

    const nouveauNom = prompt("Nouveau nom :", maps[id].nom);

    if (nouveauNom) {

        maps[id].nom = nouveauNom;

    }

    const nouvelArgent = prompt("Nouvel argent :", maps[id].argent);

    if (nouvelArgent !== null) {

        maps[id].argent = Number(nouvelArgent);

    }

    sauvegarder();

    alert("Map modifiée.");

}

// =============================
// SUPPRIMER UNE MAP
// =============================

function supprimerMap() {

    if (maps.length === 0) {

        alert("Aucune map.");

        return;

    }

    let liste = "";

    maps.forEach((map, index) => {

        liste += index + " - " + map.nom + "\n";

    });

    const id = Number(prompt(liste + "\n\nSupprimer quelle map ?"));

    if (isNaN(id) || !maps[id]) return;

    if (confirm("Supprimer " + maps[id].nom + " ?")) {

        maps.splice(id,1);

        sauvegarder();

        alert("Map supprimée.");

    }

}

// =============================
// IDENTIFIANT
// =============================

function changerIdentifiant(){

    const id = prompt("Nouvel identifiant :", adminUsername);

    if(!id) return;

    adminUsername = id;

    localStorage.setItem("adminUsername",adminUsername);

    alert("Identifiant modifié.");

}

// =============================
// MOT DE PASSE
// =============================

function changerMotDePasse(){

    const mdp = prompt("Nouveau mot de passe :");

    if(!mdp) return;

    adminPassword = mdp;

    localStorage.setItem("adminPassword",adminPassword);

    alert("Mot de passe modifié.");

}

// =============================
// SAUVEGARDE
// =============================

function sauvegarder(){

    localStorage.setItem("maps",JSON.stringify(maps));

}

// =============================
// DEBUG
// =============================

console.log("FS25 Manager - Admin chargé");
console.log(maps);
