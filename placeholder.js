let bartxt = document.getElementById("searchbar");
let barurl = document.getElementById("inputweb");

let btn = document.getElementById("searchbutton");

let div_reponse = document.getElementById("zonedereponse");

let nblien = document.getElementById("nombretotaldelien");

let count = 0;

nblien.innerHTML="Nombre de liens : 0/15"

bartxt.value = "";
barurl.value = "";

div_reponse.innerHTML = "";

function newtext(e) {
    let txt = bartxt.value;
    let url = barurl.value;
    bartxt.value = "";
    barurl.value = "";
    
    var li = document.createElement("li");
    var a = document.createElement("a");

    var img = document.createElement("img");


    if(url!=""){
        if (txt!=""){
            if (count > 15){
                alert("Vous ne pouvez pas mettre plus de 15 liens !");                
            }else {
                div_reponse.appendChild(li);

                $(li).addClass("flex");

                a.href = url;
                a.value = txt;
                a.classList.add("lien");

                img.src="Images/dlete.png";
                img.classList.add("imgdelete");
                img.id="imgdelete";
                
                var texte = document.createTextNode(txt);

                li.appendChild(a);
                a.appendChild(texte);

                li.appendChild(img);
                count++;
                actualier();
                
                for(let i; i >= 15; i++) {
                    document.getElementById("imgdelete").addEventListener("click", deleteimg);
                }
                
            }
        }
    }
    
    e.preventDefault();
}

function deleteimg(e){
    this.parentNode.parentNode.removeChild(this.parentNode);
    count = count-1;
    actualier();
    document.getElementById("imgdelete").addEventListener("click", deleteimg);
}

function actualier(e){
    nblien.innerHTML="Nombre total de liens : " + count + "/15";
}

btn.addEventListener("click", newtext);
