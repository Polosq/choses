let boutoncursor = document.getElementById("tutocursor");

let boutonextension = document.getElementById("tutoextension");

let iframe = document.getElementById("iframe");
let iframeinput = document.getElementById("iframeinput");
let iframebutton = document.getElementById("iframebutton");

boutoncursor.addEventListener('click', function(){
    var divtutocursor = document.getElementById("divtutocursor");
    var closecursor = document.getElementById("closecursor");
    if (divtutocursor.style.display == "none") {
        divtutocursor.style.display = "block";
        closecursor.addEventListener('click', function(){
            divtutocursor.style.display = "none";
        });
        
        closecursor.addEventListener('click', function(){
            divtutocursor.style.display = "none";
        });
    } else {
        divtutocursor.style.display = "none";
    } 
});

boutonextension.addEventListener('click', function(){
    var divtutoextension = document.getElementById("divtutoextension");
    var closeextension = document.getElementById("closeextension");
    if (divtutoextension.style.display == "none") {
        divtutoextension.style.display = "block";
        closeextension.addEventListener('click', function(){
            divtutoextension.style.display = "none";
        });
        
        closeextension.addEventListener('click', function(){
            divtutoextension.style.display = "none";
        });
        
    } else {
        divtutoextension.style.display = "none";
        divtutoextension.style.top = "550px";
    } 
});

iframebutton.addEventListener('click', function(){
    if (iframeinput.value == ""){
        iframe.style.display = "none";
        if(iframeEE.height == '400px'){
            divtutoextension.style.top = "550px";
        }else if(iframeEE.height == '600px'){
            divtutoextension.style.top = "750px";
        }
    }
    else{
        iframe.src = iframeinput.value;
        iframe.style.display = "block";
        if(iframeEE.height == '400px'){
            divtutoextension.style.top = "900px";
        }else if(iframeEE.height == '600px'){
            divtutoextension.style.top = "1100px";
        }
    }
});