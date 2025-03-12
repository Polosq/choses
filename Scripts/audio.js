let mediaRecorder;
let recordedChunks = [];

let boutonmic = document.getElementById('microbutton');
let div = document.getElementById('micropresentation');

boutonmic.addEventListener('click', async () => {
    if(boutonmic.className == 'boutonplay'){
        boutonmic.style.display="none";
        boutonmic.className = 'boutonstop';
        
        let countdown = 3;
        let countdownInterval = setInterval(() => {
            if(countdown >= 0){
                div.innerHTML = countdown;
                countdown--;
            }else{
                boutonmic.style.display="block";
                div.innerHTML = "";
                div.style.backgroundColor = "rgba(0,255,0,0.5)";
                boutonmic.innerHTML = "Arrêter l'enregistrement ...";
                clearInterval(countdownInterval);
            }
        }, 1000);

        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();

        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                recordedChunks.push(event.data);
            }
        };

        mediaRecorder.onstop = () => {
            const blob = new Blob(recordedChunks, { type: 'audio/mp3' });
            const url = URL.createObjectURL(blob);
            document.getElementById('audiomicro').src = url;
            document.getElementById('microdownload').href = url;
            recordedChunks = [];
        };
    }else{
        mediaRecorder.stop();
        boutonmic.className = 'boutonplay';
        boutonmic.innerHTML = "Démarrer l'enregistrement ...";
    }
});

