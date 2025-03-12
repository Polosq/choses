let mediaRecorder;
let recordedChunks = [];

let btn = document.getElementById('microbutton');
let div = document.getElementById('micropresentation');

btn.addEventListener('click', async () => {
    if(btn.className == 'boutonplay'){
        btn.style.display="none";
        btn.className = 'boutonstop';
        
        let countdown = 3;
        let countdownInterval = setInterval(() => {
            if(countdown > 0){
                div.innerHTML = countdown;
                countdown--;
            }else{
                btn.style.display="block";
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
        btn.className = 'boutonplay';
    }

});

