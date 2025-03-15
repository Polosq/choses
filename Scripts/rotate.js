let iframeEE = document.getElementById('doudouIframe');
let bouton = document.getElementById('rotatebutton');

bouton.addEventListener('click', function() {
    if(iframeEE.height=='400px'){
        iframeEE.height='600px';
        iframeEE.width='400px';

        if(iframeinput.value ==""){
            divtutoextension.style.top = "1750px";
        }else {
            divtutoextension.style.top = "2100px";
        }

    }else if(iframeEE.height=='600px'){
        iframeEE.height='400px';
        iframeEE.width='100%';
        if(iframeinput.value ==""){
            divtutoextension.style.top = "1550px";
        }else {
            divtutoextension.style.top = "1900px";
        }
    }
});