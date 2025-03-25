let secretpopup = document.getElementById("secret_popup");
let msgboxtitle = document.getElementById("msgboxtitle");
let msgboxcorpus = document.getElementById("msgboxcorpus");


let dick = document.getElementById("dickgenerator")



function popup(onoff){
    if(onoff == "on"){
        msgboxcorpus.style.height = "0px";
        setTimeout(function(){
            secretpopup.style.display = "none";
        },1000);
    }else if(onoff == "off"){
        secretpopup.style.display = "flex";
        msgboxcorpus.style.height = "400px";
    }
}

function draw(name){
    if(name == "dick"){
        let dessin_a_push = "";
    }
}

dick.addEventListener("click", function(){
    popup("on");
    draw("dick");
});