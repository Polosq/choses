let bartxt = document.getElementById("searchbar");
let barurl = document.getElementById("inputweb");

let btn = document.getElementById("searchbutton");

let tableau = [];

bartxt.value = "";
barurl.value = "";

function newtext(e) {
    console.log("click");
    let txt = bartxt.value;
    let url = barurl.value;
    tableau.push({
        text: txt,
        url: url
    });
    console.log(tableau);
    bartxt.value = "";
    barurl.value = "";
    e.preventDefault();
}

btn.addEventListener("click", newtext);