let img=document.getElementById("boutonn");
let pika=document.getElementById("pikaaudio");

let divcurseur=document.getElementById("zonedecurseur");

let lien1=document.getElementById("curseur1");
let lien2=document.getElementById("curseur2");
let lien3=document.getElementById("curseur3");

let divdefault=document.getElementById("divdefault");
let divhelp=document.getElementById("divhelp");
let divpointer=document.getElementById("divpointer");
let divprogress=document.getElementById("divprogress");
let divwait=document.getElementById("divwait");
let divcrosshair=document.getElementById("divcrosshair");
let divtext=document.getElementById("divtext");
let divmove=document.getElementById("divmove");
let divNA=document.getElementById("divNA");
let divV=document.getElementById("divV");
let divH=document.getElementById("divH");
let divnwse=document.getElementById("divnwse");
let divnesw=document.getElementById("divnesw");

let body=document.getElementById("body");

img.src="Images/pause.png";

let compteur=0;

function button_toogle(e){
    compteur++;
    if (img.className=="buttonplay") {
        img.classList.add("buttonpause");
        img.classList.remove("buttonplay");
        img.src="Images/pause.png";
        pika.muted=false;
        pika.play();
    } else if (img.className=="buttonpause") {
        img.classList.remove("buttonpause");
        img.classList.add("buttonplay");
        img.src="Images/play.png";
        pika.muted=true;
        pika.pause();
        
    }
}

function changercurseur(e){
    lien1.classList.remove("clique");
    lien2.classList.remove("clique");
    lien3.classList.remove("clique");

    lien1.classList.add("cliquer");
    lien2.classList.add("cliquer");
    lien3.classList.add("cliquer");
    
    this.classList.remove("cliquer");
    this.classList.add("clique");

    
    changercurseurdiv(this.id);
}

function changercurseurdiv(e){
    $(divdefault).removeClass("rgbdefault bluedefault presentationdefault");
    $(divhelp).removeClass("rgbhelp bluehelp presentationhelp");
    $(divpointer).removeClass("rgbpointer bluepointer presentationpointer");
    $(divprogress).removeClass("rgbprogress blueprogress presentationprogress");
    $(divwait).removeClass("rgbwait bluewait presentationwait");
    $(divcrosshair).removeClass("rgbcrosshair bluecrosshair presentationcrosshair");
    $(divtext).removeClass("rgbtext bluetext presentationtext");
    $(divmove).removeClass("rgbmove bluemove presentationmove");
    $(divNA).removeClass("rgbNA blueNA presentationNA");
    $(divV).removeClass("rgbV blueV presentationV");
    $(divH).removeClass("rgbH blueH presentationH");
    $(divnwse).removeClass("rgbnwse bluenwse presentationnwse");
    $(divnesw).removeClass("rgbnesw bluenesw presentationnesw");
    
    $(body).removeClass("rgbdefault bluedefault presentationdefault");

    if(e=="curseur1"){
        $(divdefault).addClass("presentationdefault");
        $(divhelp).addClass("presentationhelp");
        $(divpointer).addClass("presentationpointer");
        $(divprogress).addClass("presentationprogress");
        $(divwait).addClass("presentationwait");
        $(divcrosshair).addClass("presentationcrosshair");
        $(divtext).addClass("presentationtext");
        $(divmove).addClass("presentationmove");
        $(divNA).addClass("presentationNA");
        $(divV).addClass("presentationV");
        $(divH).addClass("presentationH");
        $(divnwse).addClass("presentationnwse");
        $(divnesw).addClass("presentationnesw");

        $(body).addClass("presentationdefault");
    } else if(e=="curseur2"){
        divdefault.classList.add("rgbdefault");
        divhelp.classList.add("rgbhelp");
        divpointer.classList.add("rgbpointer");
        divprogress.classList.add("rgbprogress");
        divwait.classList.add("rgbwait");
        divcrosshair.classList.add("rgbcrosshair");
        divtext.classList.add("rgbtext");
        divmove.classList.add("rgbmove");
        divNA.classList.add("rgbNA");
        divV.classList.add("rgbV");
        divH.classList.add("rgbH");
        divnwse.classList.add("rgbnwse");
        divnesw.classList.add("rgbnesw");

        $(body).addClass("rgbdefault");
    }
    else if(e=="curseur3"){
        divdefault.classList.add("bluedefault");
        divhelp.classList.add("bluehelp");
        divpointer.classList.add("bluepointer");
        divprogress.classList.add("blueprogress");
        divwait.classList.add("bluewait");
        divcrosshair.classList.add("bluecrosshair");
        divtext.classList.add("bluetext");
        divmove.classList.add("bluemove");
        divNA.classList.add("blueNA");
        divV.classList.add("blueV");
        divH.classList.add("blueH");
        divnwse.classList.add("bluenwse");
        divnesw.classList.add("bluenesw");

        $(body).addClass("bluedefault");
    }
}



img.addEventListener("click", button_toogle);
lien1.addEventListener("click", changercurseur);
lien2.addEventListener("click", changercurseur);
lien3.addEventListener("click", changercurseur);

let code = [];

function codesecret(e){
    code.push(this.id);
    if (code[code.length-1] === "divV"){
        if(code[code.length-2] === "divwait"){
            if(code[code.length-3] === "divcrosshair"){
                if(code[code.length-4] === "divdefault"){
                    if(code[code.length-5] === "divcrosshair"){
                        if(code[code.length-6] === "divpointer"){
                            if(code[code.length-7] === "divhelp"){
                                console.error("CAMARCHEPRESQUE")
                                if(code[code.length-8] === "divdefault"){
                                    if(code[code.length-9] === "divH"){
                                        if(code[code.length10] === "divpointer"){
                                            if(code[code.length-11] === "divnesw"){
                                                if(code[code.length-12] === "divNA"){
                                                    if(code[code.length-13] === "divtext"){
                                                        if(code[code.length-14] === "divmove"){
                                                            if(code[code.length-15] === "divNA"){
                                                                console.log("CAMARCHEPRESQUE")
                                                                if(divdefault.className=="presentation rgbdefault"){
                                                                    alert("Bravo, vous avez trouvé le code secret !");
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

divdefault.addEventListener("click", codesecret);
divhelp.addEventListener("click", codesecret);
divpointer.addEventListener("click", codesecret);
divprogress.addEventListener("click", codesecret);
divwait.addEventListener("click", codesecret);
divcrosshair.addEventListener("click", codesecret);
divtext.addEventListener("click", codesecret);
divmove.addEventListener("click", codesecret);
divNA.addEventListener("click", codesecret);
divV.addEventListener("click", codesecret);
divH.addEventListener("click", codesecret);
divnwse.addEventListener("click", codesecret);
divnesw.addEventListener("click", codesecret);