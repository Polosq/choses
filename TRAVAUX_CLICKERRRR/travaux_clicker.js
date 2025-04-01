let upgrades = [".......", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???"];
let upgrades_débloquées = ["unlocked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked"];

let score = 0;
let score_max = 0;

let affichage_score_button = document.getElementById("score");
let affichage_score_title = document.getElementById("score_middle");
let affichage_maxscore_title = document.getElementById("best_score");





function actualiser(){
    //Changement des affichage de score
    score_actualiser();

    //Changement des affichages d'améliorations
    upgrades_actualiser();
}

function score_actualiser(){
    affichage_score_button.innerHTML = "Score total : " + score;
    affichage_score_title.innerHTML = "Score total : " + score;
    affichage_maxscore_title.innerHTML = "Méilleur score : " + score_max;
}

function upgrades_actualiser(){
    for (let i; i>=20; i++){

    }
}