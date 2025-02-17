let bartxt = document.getElementById("searchbar");
let barurl = document.getElementById("inputweb");

let btn = document.getElementById("searchbutton");

let div_reponse = document.getElementById("zonedereponse");

let nblien = document.getElementById("nombretotaldelien");

let count = 0;

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

    var div = document.createElement("div");

    if(url!=""){
        if (txt!=""){
            if (count > 15){
                alert("Vous ne pouvez pas mettre plus de 15 liens !");                
            }else {
                div_reponse.appendChild(li);
                li.appendChild(div);

                $(div).addClass("flex");

                a.href = url;
                a.value = txt;
                a.classList.add("lien");

                img.src="Images/dlete.png";
                img.classList.add("imgdelete");
                img.id="imgdelete";
                
                var texte = document.createTextNode(txt);

                div.appendChild(a);
                a.appendChild(texte);

                div.appendChild(img);
                count++;
                actualier();
                document.getElementById("imgdelete").addEventListener("click", deleteimg);
            }
        }
    }
    
    e.preventDefault();
}

function deleteimg(e){
    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
    count-=1
    actualier()
}

function actualier(e){
    nblien.removeChild();
    var texte = document.createTextNode("Nombre total de liens : "+ count + "/15")
    nblien.appendChild(texte);
}

btn.addEventListener("click", newtext);
