let secretpopup = document.getElementById("secret_popup");
let msgboxtitle = document.getElementById("msgboxtitle");
let msgboxcorpus = document.getElementById("msgboxcorpus");


let dick = document.getElementById("dickgenerator")

popup("off");

function popup(onoff){
    if(onoff == "off"){
        msgboxcorpus.style.height = "0px";
        setTimeout(function(){
            secretpopup.style.display = "none";
        },1000);
    }else if(onoff == "on"){
        secretpopup.style.display = "flex";
        msgboxcorpus.style.height = "400px";
    }
}

function BITE(cote, hauteur) {
    // Initialisation des variables
    let chaine = "";
    let espace = Math.floor((cote + 1) / 2);
  
    // Programme qui fait la partie supérieure
    chaine += " ".repeat(espace + 1) + "_".repeat(cote) + "\n";
    chaine += " ".repeat(espace) + "/" + " ".repeat(cote) + "\\" + "\n";
    chaine += " ".repeat(espace - 1) + "/" + " ".repeat(cote + 2) + "\\" + "\n";
  
    for (let i = 0; i < Math.floor(cote / 2) - 1; i++) {
      chaine += " ".repeat(espace - 2) + "|" + " ".repeat(cote + 4) + "|" + "\n";
    }
  
    chaine += " ".repeat(espace - 2) + "\\/|" + " ".repeat(cote) + "|\\/" + "\n";
  
    // Initialisation de la boucle
    for (let i = 0; i < hauteur - 1; i++) {
      chaine += " ".repeat(espace) + "|" + " ".repeat(cote) + "|" + "\n";
    }
  
    // Partie qui fait les ronds
    // La partie d'où part le corps
    for (let i = 0; i < 2; i++) {
      chaine += " " + "_".repeat(Math.floor(cote / 2)) + "|" + "_".repeat(Math.floor(cote / 2));
    }
    chaine += "\n";
  
    // Hauteur des ronds
    for (let i = 0; i < Math.floor(cote / 2); i++) {
      chaine += "|" + " ".repeat(cote) + "|" + " ".repeat(cote) + "|" + "\n";
    }
  
    // Partie basse (partie finale)
    chaine += "|" + "_".repeat(cote) + "|" + "_".repeat(cote) + "|" + "\n";
  
    return chaine;
}



function draw(name){
    if(name == "dick"){
        const largeur = document.getElementById('cotedick').value;
        const hauteur = document.getElementById('hauteurdick').value;
        
        var dessin_a_push = BITE(largeur, hauteur);
    }

    msgboxcorpus.innerHTML = `<pre>${dessin_a_push}</pre>`;
}

dick.addEventListener("click", function(){
    popup("on");
    draw("dick");
});