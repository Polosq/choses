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
