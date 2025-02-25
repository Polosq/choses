let closecursor = document.getElementById("closecursor");
let divtutocursor = document.getElementById("divtutocursor");
let boutoncursor = document.getElementById("tutocursor");

boutoncursor.addEventListener('click', function(){
    if (divtutocursor.style.display == "none") {
        divtutocursor.style.display = "block";
    } else {
        divtutocursor.style.display = "none";
    }
});

closecursor.addEventListener('click', function(){
    divtutocursor.style.display = "none";
});
