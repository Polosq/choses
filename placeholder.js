let bartxt = document.getElementById("searchbar");
let barurl = document.getElementById("inputweb");

let btn = document.getElementById("searchbutton");

let div_reponse = document.getElementById("zonedereponse");

let result="";

bartxt.value = "";
barurl.value = "";

div_reponse.innerHTML = "";

function newtext(e) {
    console.log("click");
    let txt = bartxt.value;
    let url = barurl.value;
    result = txt + " " + url;
    console.log(result);
    bartxt.value = "";
    barurl.value = "";
    
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    var a = document.createElement("a");
    li.appendChild(text);
    ul.appendChild(li);

    a.href = url;
    a.value = txt;
    
    div_reponse.appendChild(a);
    e.preventDefault();
}

btn.addEventListener("click", newtext);