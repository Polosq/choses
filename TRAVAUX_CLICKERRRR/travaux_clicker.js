let upgrades = [["Titre", "Infos", "prix", "nombre possedés"], [".......", "....", 10, 0], ["???", "???", 2500, 0], ["???", "???", 10000, 0], ["???", "???", 50000, 0], ["???", "???", 200320, 0], ["???", "???", 503462, 0], ["???", "???", 1536356, 0], ["???", "???", 3753458, 0], ["???", "???", 7345320, 0], ["???", "???", 23642086, 0], ["???", "???", 5507539842, 0], ["???", "???", 12662496534, 0], ["???", "???", 52623462465, 0], ["???", "???", 92913247545, 0], ["???", "???", 298763098375, 0], ["???", "???", 420437693875, 0], ["???", "???", 720985284234, 0], ["???", "???", 2987098708745, 0], ["???", "???", 5098765209209, 0], ["???", "???", 8539438250853, 0]];
let upgrades_debloquees = ["unlocked", "unlocked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked"];

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
    // PENSER A FAIRE DES ARRONDIS?
    affichage_score_button.innerHTML = "Score total : " + score;
    affichage_score_title.innerHTML = "Score total : " + score;
    affichage_maxscore_title.innerHTML = "Méilleur score : " + score_max;
}

function upgrades_actualiser(){
    amelioration_container.innerHTML = "";
    let upgraded = false;
    for (let i=1; i<upgrades_debloquees.length; i++){
        
        // Tests pour savoir si l'amélioration est débloquée
        if(upgrades_debloquees[i] == "unlocked"){
            upgraded = true;
        }else if(upgrades_debloquees[i] == "locked"){
            upgraded = false;
        }

        // Création de la boite d'amélioration
        let flexcontent = document.createElement("div");
        flexcontent.style.display = "flex";
        let infos = document.createElement("div");
        infos.style.flexGrow = "1";
        flexcontent.appendChild(infos);

        let container = document.createElement("div");
        $(container).addClass("upgradecontainer");
        container.appendChild(flexcontent)
        
        let h4 = document.createElement("h4");
        if(upgraded){
            var h4value = document.createTextNode(upgrades[i][0]);
        }else{
            var h4value = document.createTextNode("???");
        }
        infos.appendChild(h4);
        h4.appendChild(h4value);

        let h6 = document.createElement("h6");
        if (upgraded){
            var h6value = document.createTextNode(upgrades[i][1]);
        }else {
            var h6value = document.createTextNode("???");
        }
        infos.appendChild(h6);
        h6.appendChild(h6value);

        if(upgrades[i][3] != 0){
            let value = document.createTextNode("X " + upgrades[i][3]);
            let howmuch_div = document.createTextNode("div");
            howmuch_div.appendChild(value);
            flexcontent.appendChild(howmuch_div);
        }
        
        if (upgrades_debloquees[i]=="unlocked"){
            let prix = document.createElement("h6");
            let prixvalue = document.createTextNode(upgrades[i][2] + " crédits")
            prix.appendChild(prixvalue);

            container.appendChild(prix);
        }
        
        amelioration_container.appendChild(container);

        container.addEventListener("click", function(){
            if(score >= upgrades[i][2]){
                console.info(upgraded);
                console.log(upgrades_debloquees[i]);
                if(upgraded && upgrades_debloquees[i-1] == "unlocked"){
                    upgrades_debloquees[i+1] = "unlocked";
                    upgrades[i][3]++;
                    score -= upgrades[i][2];
                    $(container).addClass("upgradecontainer_upgraded").removeClass("upgradecontainer");
                    actualiser();
                    // faire une animation plus tard
                }
            }
            else{
                // faire une animation en rouge pour dire que pas assez de crédits
                
            }
            
        });
    }
}

document.getElementById("click_button").addEventListener("click", function(){
    score++;
    actualiser();
});

actualiser();