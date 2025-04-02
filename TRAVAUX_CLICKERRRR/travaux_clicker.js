let upgrades = [[".......", "....", 500, 0], ["???", "???", 2500, 0], ["???", "???", 10000, 0], ["???", "???", 50000, 0], ["???", "???", 200320, 0], ["???", "???", 503462, 0], ["???", "???", 1536356, 0], ["???", "???", 3753458, 0], ["???", "???", 7345320, 0], ["???", "???", 23642086, 0], ["???", "???", 5507539842, 0], ["???", "???", 12662496534, 0], ["???", "???", 52623462465, 0], ["???", "???", 92913247545, 0], ["???", "???", 298763098375, 0], ["???", "???", 420437693875, 0], ["???", "???", 720985284234, 0], ["???", "???", 2987098708745, 0], ["???", "???", 5098765209209, 0], ["???", "???", 8539438250853, 0]];
let upgrades_débloquées = ["unlocked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked"];

let score = 0;
let score_max = 0;

let affichage_score_button = document.getElementById("score");
let affichage_score_title = document.getElementById("score_middle");
let affichage_maxscore_title = document.getElementById("best_score");


let amelioration_container = document.getElementById("amelioration_list");


function actualiser(){
    //Changement des affichage de score
    score_actualiser();

    //Changement des affichages d'améliorations
    upgrades_actualiser();
}

function score_actualiser(){
    if (score>score_max){
        score_max = score;
    }

    // PENSER A FAIRE DES ARRONDIS
    affichage_score_button.innerHTML = "Score total : " + score;
    affichage_score_title.innerHTML = "Score total : " + score;
    affichage_maxscore_title.innerHTML = "Méilleur score : " + score_max;
}

function upgrades_actualiser(){
    let upgraded = false;
    for (let i=0; i<=upgrades_débloquées.length; i++){
        // Tests pour savoir si l'amélioration est débloquée
        if(upgrades_débloquées[i] == "unlocked"){
            upgraded = true;
        }else {
            upgraded = false;
        }

        // Création de la boite d'amélioration
        let br = document.createElement("br");

        let container = document.createElement("div");
        if (upgrades_débloquées[i+1] == "unlocked"){
            $(container).addClass("upgradecontainer_upgraded");
        }else{
            $(container).addClass("upgradecontainer");
        }

        let h4 = document.createElement("h4");
        if(upgraded){
            var h4value = document.createTextNode(upgrades[i][0]);
        }else{
            var h4value = document.createTextNode("???");
        }
        $(h4).addClass("upgradetitle");
        container.appendChild(h4);
        h4.appendChild(h4value);
        container.appendChild(br);

        let h6 = document.createElement("h6");
        if (upgraded){
            var h6value = document.createTextNode(upgrades[i][1]);
        }else {
            var h6value = document.createTextNode("???");
        }
        container.appendChild(h6);
        h6.appendChild(h6value);

         //ligne utile???? est ce qu'on affiche le prix qd on a déja acheté
        if (upgrades_débloquées[i]=="unlocked"){
            let prix = document.createElement("h6");
            let prixvalue = document.createTextNode(upgrades[i][3] + " crédits")

            container.appendChild(br);
            container.appendChild(prix);
        }
        
        amelioration_container.appendChild(container);

        container.addEventListener("click", function(){
            upgrades_débloquées[i+1] = "unlocked";
            upgrades[i][4]++;
            // faire une animation plus tard

            if(score-upgrades[i][3]>=0){
                $(container).addClass("upgradecontainer_upgraded").removeClass("upgradecontainer");
                actualiser();
            }
            
        });
    }
}

document.getElementById("click_button").addEventListener("click", function(){
    score++;
    actualiser();
});