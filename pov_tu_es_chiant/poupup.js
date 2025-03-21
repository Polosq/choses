let popup = document.getElementById("poupup");

count = 0
setInterval(function(){
    if(count%2 == 0){
        popup.style.display = "none";
    }else if(count%2 == 1){
        popup.style.display = "absolute";
    }
}, 1000);