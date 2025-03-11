let iframeEE = document.getElementById('doudouIframe');
let bouton = document.getElementById('rotatebutton');

bouton.addEventListener('click', function() {
    if(iframeEE.height='400px'){
        iframeEE.height='600px';
        iframeEE.width='400px';
    }else{
        iframeEE.height='400px';
        iframeEE.width='100%';
    }
});