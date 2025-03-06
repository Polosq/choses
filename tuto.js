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

        document.getElementById('extensionexample').addEventListener('click', function() {
            var url = "https://github.com/Polosq/choses/releases/latest/download/extension.xpi";
            var installMessage = "Pour installer cette extension, veuillez cliquer sur 'Continuer l'installation' et suivre les instructions.";
          
            // Afficher le message d'installation
            alert(installMessage);
          
            // Ouvrir le lien d'installation dans un nouvel onglet
            window.open(url, '_blank');
            }
        );
        
    } else {
        divtutoextension.style.display = "none";
        divtutoextension.style.top = "300px";
    } 
});

iframebutton.addEventListener('click', function(){
    if (iframeinput.value == ""){
        iframe.style.display = "none";
        divtutoextension.style.top = "300px";
    }
    else{
        iframe.src = iframeinput.value;
        iframe.style.display = "block";
        divtutoextension.style.top = "400px";
    }
});