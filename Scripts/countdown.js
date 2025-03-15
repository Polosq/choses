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


btn3s.addevntListener("click", function() {
    if (btn3s.className == "countdownplay"){
        btn3s.classList.add("countdownpause");
        btn3s.classList.remove("countdownplay");
        let timeleft = 3;
        let downloadTimer = setInterval(function(){
            timeleft--;
            div3s.innerHTML = ""+timeleft+"";
            if(timeleft <= 0){
                clearInterval(downloadTimer);
            }
        },1000);
    }
});

btn30s.addevntListener("click", function() {
    if (btn30s.className == "countdownplay"){
        btn30s.classList.add("countdownpause");
        btn30s.classList.remove("countdownplay");
        let timeleft = 30;
        let downloadTimer = setInterval(function(){
            timeleft--;
            div30s.innerHTML = ""+timeleft+"";
            if(timeleft <= 0){
                clearInterval(downloadTimer);
            }
        },1000);
    }
});

btn1m.addevntListener("click", function() {
    if (btn1m.className == "countdownplay"){
        btn1m.classList.add("countdownpause");
        btn1m.classList.remove("countdownplay");
        let timeleft = 60;
        let downloadTimer = setInterval(function(){
            timeleft--;
            div1m.innerHTML = ""+timeleft+"";
            if(timeleft <= 0){
                clearInterval(downloadTimer);
            }
        },1000);
    }
});

btn5m.addevntListener("click", function() {
    if (btn5m.className == "countdownplay"){
        btn5m.classList.add("countdownpause");
        btn5m.classList.remove("countdownplay");
        let timeleft = 300;
        let downloadTimer = setInterval(function(){
            timeleft--;
            div5m.innerHTML = ""+timeleft+"";
            if(timeleft <= 0){
                clearInterval(downloadTimer);
            }
        },1000);
    }
});

btnchose.addevntListener("click", function() {
    if (btnchose.className == "countdownplay"){
        btnchose.classList.add("countdownpause");
        btnchose.classList.remove("countdownplay");
        let timeleft = document.getElementById("countinput").value*60;
        document.getElemnentById("countinput").value = NaN;
        let downloadTimer = setInterval(function(){
            timeleft--;
            divchose.innerHTML = ""+timeleft+"";
            if(timeleft <= 0){
                clearInterval(downloadTimer);
                divchose.innerHTML = "";
            }
        },1000);
    }
});