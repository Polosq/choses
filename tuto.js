let closecursor = document.getElementById("closecursor");
let boutoncursor = document.getElementById("tutocursor");

boutoncursor.addEventListener('click', function(){
    var divtutocursor = document.getElementById("divtutocursor");
    if (divtutocursor.style.display == "none") {
        divtutocursor.style.display = "block";
        closecursor.addEventListener('click', function(){
            divtutocursor.style.display = "none";
        });
        var closecursor = document.getElementById("closecursor");
        closecursor.addEventListener('click', function(){
            divtutocursor.style.display = "none";
        });
    } else {
        divtutocursor.style.display = "none";
    }
    
});

