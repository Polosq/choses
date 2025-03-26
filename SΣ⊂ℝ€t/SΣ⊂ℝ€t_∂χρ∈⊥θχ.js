let secretpopup = document.getElementById("secret_popup");
let msgboxtitle = document.getElementById("msgboxtitle");
let msgboxcorpus = document.getElementById("msgboxcorpus");

let dick = document.getElementById("dickgenerator");

let close_popup = document.getElementById("close_popup");

const form = document.querySelector("form");
const log = document.querySelector("#log");

let caractere = " ";

form.addEventListener("submit",(event) => {
      const data = new FormData(form);
      for (const entry of data) {
        caractere = `${entry[1]}\r`;
      }
      event.preventDefault();
      console.error(caractere)
  },
  false,
);


popup("off");

function popup(onoff){
    if(onoff == "off"){
        msgboxcorpus.style.height = "0px";
        setTimeout(function(){
            secretpopup.style.display = "none";
        },100);
    }else if(onoff == "on"){
        secretpopup.style.display = "flex";
        setTimeout(function(){
          msgboxcorpus.style.height = "400px";
        }, 100)   
    }
}

function BITE(cote, hauteur) {
    // Initialisation des variables
    let correction = 0;
    if(cote >= 29){
      correction = Math.floor((cote-11)/18);
    }else if(cote < 11){
      correction = -1;
    }
    
    let chaine = "";
    let espace = Math.floor(Math.floor((Math.floor((cote + 1) / 2)-1)/9) - correction);
  
    // Programme qui fait la partie supérieure
    chaine += caractere.repeat(espace) + caractere + "_".repeat(cote) + caractere + caractere.repeat(espace) + "\n";
    chaine += caractere.repeat(espace) + "/" + " ".repeat(cote) + "\\" + caractere.repeat(espace) + "\n";
    chaine += caractere.repeat(espace - 1) + "/" + caractere.repeat(cote) + caractere.repeat(2) + "\\" + caractere.repeat(espace-1) + "\n";
  
    for (let i = 0; i < Math.floor(cote / 2) - 1; i++) {
      chaine += caractere.repeat(espace - 2) + "|" + caractere.repeat(cote) + caractere.repeat(4) + "|" + caractere.repeat(espace - 2) + "\n";
    }
  
    chaine += caractere.repeat(espace - 2) + "\\/|" + caractere.repeat(cote) + "|\\/" + caractere.repeat(espace - 2) + "\n";
  
    // Initialisation de la boucle
    for (let i = 0; i < hauteur - 1; i++) {
      chaine += caractere.repeat(espace) + "|" + caractere.repeat(cote) + "|" + caractere.repeat(espace) + "\n";
    }
  
    // Partie qui fait les ronds
    // La partie d'où part le corps
    chaine += caractere
    for (let i = 0; i < 2; i++) {
      chaine += "_".repeat(Math.floor(cote / 2)) + "|" + "_".repeat(Math.floor(cote / 2)) + caractere;
    }
    chaine += "\n";
  
    // Hauteur des ronds
    for (let i = 0; i < Math.floor(cote / 2); i++) {
      chaine += "|" + caractere.repeat(cote) + "|" + caractere.repeat(cote) + "|" + "\n";
    }
  
    // Partie basse (partie finale)
    chaine += "|" + "_".repeat(cote) + "|" + "_".repeat(cote) + "|" + "\n";
  
    console.log(chaine);
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
    close_popup.addEventListener("click", function(){
      popup("off")
    });
});





