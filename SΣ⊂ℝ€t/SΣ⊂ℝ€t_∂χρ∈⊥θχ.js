let secretpopup = document.getElementById("secret_popup");
let msgboxtitle = document.getElementById("msgboxtitle");
let msgboxcorpus = document.getElementById("msgboxcorpus");

let dick = document.getElementById("dickgenerator");
let uninstalling_val = document.getElementById("uninstalling-val_generator");
let poop_mario = document.getElementById("mario-pooping_generator");
let transform_generator = document.getElementById("transform_generator");

let close_popup = document.getElementById("close_popup");

const form = document.getElementById("form_separator");
const form2 = document.getElementById("caractere_to_modif");

let caractere = " ";

form.addEventListener("submit",(event) => {
      const data = new FormData(form);
      for (const entry of data) {
        caractere = entry[1];
      }
      event.preventDefault();
  },
  false,
);

let caractere_a_modif = "";

form2.addEventListener("submit",(event) => {
  const data = new FormData(form);
  for (const entry of data) {
    caractere_a_modif = entry[1];
  }
  event.preventDefault();
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
    chaine += caractere.repeat(espace) + "/" + caractere.repeat(cote) + "\\" + caractere.repeat(espace) + "\n";
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
    chaine += caractere;
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
  
    return chaine;
}

function uninstalling(){
  let chaine = "";
  chaine += caractere.repeat(3) + "UNINSTALLING VALORANT" + caractere.repeat(2) + "\n";
  chaine += "▇▇▇▇▇▇▇▇▇▇▇▇▇▇▢" + "\n";
  chaine += caractere.repeat(8) + "╭━╮╭━╮╭╮ ╱ " + caractere.repeat(7) + "\n";
  chaine += caractere.repeat(8) + "╰━┫╰━┫╰╯╱╭╮" + caractere.repeat(7) + "\n";
  chaine += caractere.repeat(8) + "╰━╯╰━╯ ╱ ╰╯" + caractere.repeat(7) + "\n"
  chaine += caractere.repeat(9) + "COMPLETE" + caractere.repeat(9) + "\n";
  chaine += caractere.repeat(26);
  return chaine;

/*
   UNINSTALLING VALORANT     
▇▇▇▇▇▇▇▇▇▇▇▇▇▇▢   
        ╭━╮╭━╮╭╮ ╱                　　
        ╰━┫╰━┫╰╯╱╭╮                 
        ╰━╯╰━╯ ╱ ╰╯           　 
         COMPLETE          
                                
*/
}

function mario(){
  let chaine = "";
  chaine += caractere.repeat(9) + "▓▓▓▓▀█" + caractere.repeat(13) + "\n";
  chaine += caractere.repeat(6) + "▄▀▓▓▄██████▄" + caractere.repeat(10) + "\n";
  chaine += caractere.repeat(5) + "▄█▄█▀" + caractere.repeat(2) +"▄" + caractere + "▄" + caractere + "█▀" + caractere.repeat(10) + "\n";
  chaine += caractere.repeat(4) + "▄▀" + caractere + "██▄" + caractere.repeat(2) +"▀" + caractere + "▀" + caractere + "▀▄" + caractere.repeat(10) + "\n";
  chaine += caractere.repeat(4) + "▀▄" + caractere.repeat(2) + "▀" + caractere + "▄█▄▄" + caractere.repeat(2) + "▄█▄" + caractere.repeat(9) + "\n";
  chaine += caractere.repeat(6) + "▀█▄▄" + caractere.repeat(2) + "▀▀▀█▀" + caractere.repeat(11) + "\n";
  chaine += caractere.repeat(6) + "█" + caractere.repeat(8) + "▄▀▀" + caractere + "▐" + caractere.repeat(8) + "\n";
  chaine += caractere.repeat(4) + "▄▀" + caractere.repeat(8) + "▐" + caractere + "▄▄▀" + caractere.repeat(9) + "\n";
  chaine += caractere.repeat(2) + "▄▀" + caractere.repeat(3) + "▐" + caractere.repeat(5) + "█▄▀" + caractere + "▐" + caractere.repeat(10) + "\n";
  chaine += caractere.repeat(2) + "█" + caractere.repeat(3) + "▐" + caractere.repeat(8) + "▄" + caractere + "█" + caractere.repeat(10) + "\n";
  chaine += caractere.repeat(3) + "█▄" + caractere.repeat(2) + "▀▄" + caractere.repeat(4) + "▄▀▐" + caractere + "█" + caractere.repeat(10) + "\n";
  chaine += caractere.repeat(3) + "█▐▀▀▀" + caractere + "▀▀▀▀" + caractere.repeat(2) + "▐" + caractere + "█" + caractere.repeat(10) + "\n";
  chaine += caractere.repeat(2) + "▐█▐▄" + caractere.repeat(2) + "▀" + caractere.repeat(6) + "▐" + caractere + "█▄▄" + caractere.repeat(8) + "\n";
  chaine += caractere.repeat(3) + "▀▀" + caractere.repeat(2) + "YOU" + caractere.repeat(4) + "▐▄▄▄▀" + caractere.repeat(9);

  return chaine;
  
}


function choose(){
  let text = document.getElementById("user-text-to-modif").value;
  let reponse = text.replace(new RegExp(caractere_a_modif, "g"), caractere);
  return reponse;
}







function draw(name){
  if(name == "dick"){
    const largeur = document.getElementById('cotedick').value;
    const hauteur = document.getElementById('hauteurdick').value;
        
    var dessin_a_push = BITE(largeur, hauteur);
  }
  else if(name == "uninstalling"){
    var dessin_a_push = uninstalling();
  }
  else if(name == "mario"){
    var dessin_a_push = mario();
  }
  else if(name == "choose"){
    var dessin_a_push = choose();
  }
  
  var container = document.createElement("div");
  
  var div = document.createElement("div");
  container.appendChild(div);
  $(div).addClass("corpuscopypaste");
  var dessin = document.createTextNode(dessin_a_push);
  div.appendChild(dessin);
  
  var btnn = document.createElement("button");
  let txt = "Copier";
  var btnvalue = document.createTextNode(txt);
  btnn.id="COPY_PASTE";
  $(btnn).addClass("countdownplay");
  container.appendChild(btnn);
  btnn.appendChild(btnvalue)
  
  msgboxcorpus.appendChild(container);
  
  btnn.addEventListener("click", function(){
    navigator.clipboard.writeText(dessin_a_push);
  });
}




dick.addEventListener("click", function(){
  popup("on");
  draw("dick");
  close_popup.addEventListener("click", function(){
    popup("off");
  });
});

uninstalling_val.addEventListener("click", function(){
  popup("on");
  draw("uninstalling");
  close_popup.addEventListener("click", function(){
    popup("off");
  });
});

poop_mario.addEventListener("click", function(){
  popup("on");
  draw("mario");
  close_popup.addEventListener("click", function(){
    popup("off");
  });
});

transform_generator.addEventListener("click", function(){
  popup("on");
  draw("choose");
  close_popup.addEventListener("click", function(){
    popup("off");
  })
});