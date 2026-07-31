const maps = [
{
    nom: "Riverbend Springs",
    image: "images/riverbend.jpg",
    argent: 100000,
    animaux: ["🐄","🐑"],
    activites: ["🌾","🏭"]
},
{
    nom: "Haut-Beyleron",
    image: "images/hautbeyleron.jpg",
    argent: 20000,
    animaux: ["🐔"],
    activites: ["🌲"]
},
{
    nom: "Ma Map",
    image: "images/map3.jpg",
    argent: 50000,
    animaux: [],
    activites: []
}
];

const cards = document.querySelector(".cards");

function afficherMaps(){

    cards.innerHTML = "";

    maps.forEach((map,index)=>{

        const animaux = map.animaux.join(" ");
        const activites = map.activites.join(" ");

        cards.innerHTML += `

        <div class="card">

            <img src="${map.image}" alt="${map.nom}">

            <div class="card-content">

                <h2>${map.nom}</h2>

                <p class="money">💰 ${map.argent.toLocaleString("fr-FR")} €</p>

                <div class="icons">

                    ${animaux}

                    ${activites}

                </div>

                <button onclick="ouvrirMap(${index})">

                    Ouvrir

                </button>

            </div>

        </div>

        `;

    });

}

afficherMaps();

function ouvrirMap(id){

    alert("Ouverture de la map : " + maps[id].nom);

}
