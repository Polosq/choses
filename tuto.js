let boutoncursor = document.getElementById("tutocursor");

let boutonextension = document.getElementById("tutoextension");

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
    } 
});