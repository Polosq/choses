let div3s = document.getElementById("3s_countdown");
let div30s = document.getElementById("30s_countdown");
let div1m = document.getElementById("1m_countdown");
let div5m = document.getElementById("5m_countdown");
let divchose = document.getElementById("chose_countdown");

let input = document.getElementById("countinput");

let btn3s = document.getElementById("start3s");
let btn30s = document.getElementById("start30s");
let btn1m = document.getElementById("start1m");
let btn5m = document.getElementById("start5m");
let btnchose = document.getElementById("startchose");


btn3s.addEventListener("click", function() {
    if (btn3s.className == "countdownplay"){
        btn3s.classList.add("countdownstop");
        btn3s.classList.remove("countdownplay");
        let timeleft = 3;
        btn3s.disabled = true;
        let downloadTimer = setInterval(function(){
            div3s.innerHTML = "0 : 0"+timeleft;
            timeleft--;

            if(timeleft < -1){
                clearInterval(downloadTimer);
                div3s.innerHTML = "";

                btn3s.disabled = false;
                btn3s.classList.add("countdownplay");
                btn3s.classList.remove("countdownstop");
            }
        },1000);
    }
});

btn30s.addEventListener("click", function() {
    if (btn30s.className == "countdownplay"){
        btn30s.classList.add("countdownstop");
        btn30s.classList.remove("countdownplay");
        btn30s.disabled=true;
        let timeleft = 30;
        let downloadTimer = setInterval(function(){
            if (timeleft< 10)
                div30s.innerHTML = "0 : 0" + timeleft;
            else{
                div30s.innerHTML = "0 : "+timeleft;
            }
            timeleft--;

            if(timeleft < -1){
                clearInterval(downloadTimer);
                btn30s.disabled=false;
                btn30s.classList.add("countdownplay");
                btn30s.classList.remove("countdownstop");

                div30s.innerHTML = "";
            }
        },1000);
    }
});

btn1m.addEventListener("click", function() {
    if (btn1m.className == "countdownplay"){
        btn1m.classList.add("countdownstop");
        btn1m.classList.remove("countdownplay");
        btn1m.disabled=true;
        let timeleft = 60;
        let downloadTimer = setInterval(function(){
            if (timeleft%60 < 10)
                div1m.innerHTML = Math.floor(timeleft/60) + " : 0" + timeleft%60;
            else{
                div1m.innerHTML = Math.floor(timeleft/60) + " : " + timeleft%60;
            }
            timeleft--;
            
            if(timeleft < -1){
                clearInterval(downloadTimer);
                btn1m.disabled=false;
                btn1m.classList.add("countdownplay");
                btn1m.classList.remove("countdownstop");

                div1m.innerHTML = "";
            }
        },1000);
    }
});

btn5m.addEventListener("click", function() {
    if (btn5m.className == "countdownplay"){
        btn5m.classList.add("countdownstop");
        btn5m.classList.remove("countdownplay");
        btn5m.disabled=true;
        let timeleft = 300;
        let downloadTimer = setInterval(function(){
            if (timeleft%60 < 10)
                div5m.innerHTML = Math.floor(timeleft/60) + " : 0" + timeleft%60;
            else{
                div5m.innerHTML = Math.floor(timeleft/60) + " : " + timeleft%60;
            }
            timeleft--;

            if(timeleft < -1){
                clearInterval(downloadTimer);
                btn5m.disabled=false;
                btn5m.classList.add("countdownplay");
                btn5m.classList.remove("countdownstop");
                
                div5m.innerHTML = "";
            }
        },1000);
    }
});

btnchose.addEventListener("click", function() {
    if (btnchose.className == "countdownplay"){
        btnchose.classList.add("countdownstop");
        btnchose.classList.remove("countdownplay");
        btnchose.disabled=true;

        const time = document.getElementById("countinput").value;

        let timeleft = document.getElementById("countinput").value*60;
        document.getElementById("countinput").value = NaN;
        let downloadTimer = setInterval(function(){
            if (timeleft%60 < 10)
                divchose.innerHTML = Math.floor(timeleft/60) + " : 0" + timeleft%60;
            else{
                divchose.innerHTML = Math.floor(timeleft/60) + " : " + timeleft%60;
            }
            timeleft--;
            
            if(timeleft < -1){
                clearInterval(downloadTimer);
                btnchose.disabled=false;
                btnchose.classList.add("countdownplay");
                btnchose.classList.remove("countdownstop");

                const msg = "Votre minuteur de " + time + " minutes est terminé !";
                const finished = new Notification("Minuteur", {body: msg});
                
                divchose.innerHTML = "";
            }
        },1000);
    }
});