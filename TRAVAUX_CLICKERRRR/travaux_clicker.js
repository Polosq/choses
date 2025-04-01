let upgrades = [[".......", "....", "...."], ["???", "???", "prix..."], ["???", "???", "prix..."], ["???", "???", "prix..."], ["???", "???", "prix..."], ["???", "???", "prix..."], ["???", "???", "prix..."], ["???", "???", "prix..."], ["???", "???", "prix..."], ["???", "???", "prix..."], ["???", "???", "prix..."], ["???", "???", "prix..."], ["???", "???", "prix..."], ["???", "???", "prix..."], ["???", "???", "prix..."], ["???", "???", "prix..."], ["???", "???", "prix..."], ["???", "???", "prix..."], ["???", "???", "prix..."], ["???", "???", "prix..."]];
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
    for (let i; i>=20; i++){
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
        let h4value = document.createTextNode(upgrades[i][0]);
        $(h4).addClass("upgradetitle");
        container.appendChild(h4);
        h4.appendChild(h4value);
        container.appendChild(br);

        let h6 = document.createElement("h6");
        let h6value = document.createTextNode(upgrades[i][1]);
        container.appendChild(h6);
        h6.appendChild(h6value);

        if (upgrades_débloquées[i+1] == "locked"){ //ligne utile???? est ce qu'on affiche le prix qd on a déja acheté
            if (upgrades_débloquées[i]=="unlocked"){
                let prix = document.createElement("h6");
                let prixvalue = document.createTextNode(upgrades[i][3] + " crédits")

                container.appendChild(br);
                container.appendChild(prix);
            }
        }

        amelioration_container.appendChild(container);

        container.addEventListener("click", function(){
            if(upgrades_débloquées[i+1]=="locked"){
                upgrades_débloquées[i+1] = "unlocked";
                // faire une animation plus tard

                score -= parseInt(upgrades[i][3]);
                $(container).addClass("upgradecontainer_upgraded").removeClass("upgradecontainer");
            }
        })
    }
}

document.getElementById("click_button").addEventListener("click", function(){
    score++;
    actualiser();
});