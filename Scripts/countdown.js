let div3s = document.getElementById("3s_countdown");
let div30s = document.getElementById("30s_countdown");
let div1m = document.getElementById("1m_countdown");
let div5m = document.getElementById("5m_countdown");
let divchose = document.getElementById("chose_countdown");

let btn3s = document.getElementById("start3s");
let btn30s = document.getElementById("start30s");
let btn1m = document.getElementById("start1m");
let btn5m = document.getElementById("start5m");
let btnchose = document.getElementById("startchose");

$(btn3s, btn30s, btn1m, btn5m, btnchose).addevntListener("click", function() {
    if (this.className == "countdownplay"){
        this.classList.add("countdownstop").remove("countdownplay");
    }else if(this.className == "countdownstop"){
        this.classList.add("countdownplay").remove("countdownstop");
    }
});

$(btn3s).addevntListener("click", function() {
    if (btn3s.className == "countdownplay"){
        let timeleft = 3;
        let downloadTimer = setInterval(function(){
            timeleft--;
            div3s.innerHTML = timeleft;
            if(timeleft <= 0)
                clearInterval(downloadTimer);
        },1000);
    }
});

$(btn30s).addevntListener("click", function() {
    if (btn30s.className == "countdownplay"){
        let timeleft = 30;
        let downloadTimer = setInterval(function(){
            timeleft--;
            div30s.innerHTML = timeleft;
            if(timeleft <= 0)
                clearInterval(downloadTimer);
        },1000);
    }
});

$(btn1m).addevntListener("click", function() {
    if (btn1m.className == "countdownplay"){
        let timeleft = 60;
        let downloadTimer = setInterval(function(){
            timeleft--;
            div1m.innerHTML = timeleft;
            if(timeleft <= 0)
                clearInterval(downloadTimer);
        },1000);
    }
});

$(btn5m).addevntListener("click", function() {
    if (btn5m.className == "countdownplay"){
        let timeleft = 300;
        let downloadTimer = setInterval(function(){
            timeleft--;
            div5m.innerHTML = timeleft;
            if(timeleft <= 0)
                clearInterval(downloadTimer);
        },1000);
    }
});

$(btnchose).addevntListener("click", function() {
    if (btnchose.className == "countdownplay"){
        let timeleft = document.getElementById("chose_countdown").value;
        let downloadTimer = setInterval(function(){
            timeleft--;
            divchose.innerHTML = timeleft;
            if(timeleft <= 0)
                clearInterval(downloadTimer);
        },1000);
    }
});