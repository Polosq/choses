let mediaRecorder;
let recordedChunks = [];

let boutonmic = document.getElementById('microbutton');
let div = document.getElementById('micropresentation');

boutonmic.addEventListener('click', async () => {
    if(boutonmic.className == 'boutonplay'){
        boutonmic.style.display="none";
        
        div.style.backgroundColor = "rgba(0,255,0,0.5)";
        boutonmic.style.display="block";
        div.style.alignContent = "center";
        div.style.textAlign = "center";
        boutonmic.className = 'boutonstop';
        boutonmic.innerHTML = "Arrêter l'enregistrement ..."; 

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
        div.style.backgroundColor = "rgba(255,0,0,0.5)";
        boutonmic.className = 'boutonplay';
        boutonmic.innerHTML = "Démarrer l'enregistrement ...";
    }
});

