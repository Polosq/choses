let upgrades = [["Titre", "Infos", "prix", "nombre possedés"], ["Don", "Rapporte 1 crédit toutes les secondes", 250, 0], ["Gants en cuir", "+1 crédit a chaque clic", 1000, 0], ["Investissement", "Multiplie par deux le nombre de crédits par seconde", 5000, 0], ["???", "???", 25000, 0], ["???", "???", 100320, 0], ["???", "???", 503462, 0], ["???", "???", 1536356, 0], ["???", "???", 3753458, 0], ["???", "???", 7345320, 0], ["???", "???", 23642086, 0], ["???", "???", 5507539842, 0], ["???", "???", 12662496534, 0], ["???", "???", 52623462465, 0], ["???", "???", 92913247545, 0], ["???", "???", 298763098375, 0], ["???", "???", 420437693875, 0], ["???", "???", 720985284234, 0], ["???", "???", 2987098708745, 0], ["???", "???", 5098765209209, 0], ["???", "???", 8539438250853, 0]];
let upgrades_debloquees = ["unlocked", "unlocked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked", "locked"];

let pricemultiplication = [1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8];

let score = 0;
let score_max = 0;

let affichage_score_button = document.getElementById("score");
let affichage_score_title = document.getElementById("score_middle");
let affichage_maxscore_title = document.getElementById("best_score");
let affichage_nbpers = document.getElementById("nb_per_s");

let amelioration_container = document.getElementById("amelioration_list");

// Variables des améliorations
let click_force = 1;
let click_per_second = 0;
let click_x2_count = 0;




function actualiser(){
    //Changement des affichage de score
    score_actualiser();

    //Changement des affichages d'améliorations
    upgrades_actualiser();
}

function click_stats_actualiser(){
    affichage_nbpers.innerHTML = "Crédits par seconde : " + click_per_second;
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

function changeprice(index){
    upgrades[index][2] = upgrades[index][2] * pricemultiplication[upgrades[index][3]];
}

function newupgrade(index){
    upgrades_debloquees[index+1] = "unlocked";
    if (index == 1){
        click_per_second ++;
        affichage_nbpers.style.display = "block";
        click_stats_actualiser();
        var upgrade1 = setInterval(function(){
            score += upgrades[index][3];
            actualiser();
        }, 1000);
    }
    else if (index == 2){
        click_force ++;
    }
    else if (index == 3){
        click_x2_count ++;
        clearInterval(upgrade1);
        var upgrade2 = setInterval(function(){
            score += click_per_second*2^upgrades[index][3];
        }, 1000);
    }


    changeprice(index);
}

function letsupgrade(index){

    if (index == 1){
        click_per_second ++;
        click_stats_actualiser();
    }else if (index == 2){
        click_force ++;
    }else if (index == 3){
        click_x2_count ++;
    }


    // ^^ A compléter au fur et a mesure ^^

    changeprice(index);
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
        if(upgrades_debloquees[i+1] == "unlocked"){
            $(container).addClass("upgradecontainer_upgraded");
        }else if(i==20 && upgrades_debloquees[i] == "unlocked"){
            $(container).addClass("upgradecontainer_upgraded");
        }else{
            $(container).addClass("upgradecontainer")
        }
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
            let howmuch_div = document.createElement("div");
            flexcontent.appendChild(howmuch_div);
            howmuch_div.appendChild(value);
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
                if(upgrades_debloquees[i] == "unlocked" && upgrades_debloquees[i-1] == "unlocked"){
                    
                    upgrades[i][3]++;
                    score -= upgrades[i][2];

                    if (upgrades_debloquees[i+1] == "locked"){
                        newupgrade(i);
                        $(container).removeClass("upgradecontainer");    
                    } else{                
                        letsupgrade(i);
                    }

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
    score += click_force;
    actualiser();
});

actualiser();