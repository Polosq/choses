let bartxt = document.getElementById("searchbar");
let barurl = document.getElementById("inputweb");

let btn = document.getElementById("searchbutton");

let div_reponse = document.getElementById("zonedereponse");

let compteur = 0;

bartxt.value = "";
barurl.value = "";

div_reponse.innerHTML = "";

function newtext(e) {
    let txt = bartxt.value;
    let url = barurl.value;
    bartxt.value = "";
    barurl.value = "";
    
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    var a = document.createElement("a");
    var br = document.createElement("br");

    if(url!=""){
        if (txt!=""){
            if (compteur > 15){
                alert("Vous ne pouvez pas mettre plus de 15 liens !")                
            }else {
                div_reponse.appendChild(li);

                a.href = url;
                a.value = txt;
                a.classList.add("lien");
                
                var texte = document.createTextNode(txt)

                li.appendChild(a);
                a.appendChild(texte);
                a.appendChild(br);
                compteur++
            }
        }
    }
    
    e.preventDefault();
}

btn.addEventListener("click", newtext);