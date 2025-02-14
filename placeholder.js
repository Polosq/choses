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

    console.info(txt, url)
    
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    var a = document.createElement("a");
    div_reponse.appendChild(ul);
    ul.appendChild(li);

    a.href = url;
    a.value = txt;
    
    li.appendChild(a);
    e.preventDefault();
}

btn.addEventListener("click", newtext);