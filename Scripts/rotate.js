let iframe = document.getElementById('doudouIframe');
let bouton = document.getElementById('rotatebutton');

bouton.onclick = function() {
    if(iframe.height='400px'){
        iframe.height='600px';
        iframe.width='250px';
    }
    else{
        iframe.height='400px';
        iframe.width='100%';
    }
}