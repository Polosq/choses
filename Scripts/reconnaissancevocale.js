let start_reconaissance = document.getElementById("startreconaissance");
let reponse_reconaissance = document.getElementById("reconaissancereponse");


start_reconaissance.addEventListener("click", function(){
    // Vérifiez si l'API Web Speech est disponible
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
        // Créez une instance de SpeechRecognition
        const recognition = new SpeechRecognition();
        recognition.lang = 'fr-FR'; // Définissez la langue (ici, en français)

        // Démarrez la reconnaissance vocale
        recognition.start();

        // Capturez le texte lorsqu'il est reconnu
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript; // Texte reconnu
            reponse_reconaissance.appendChild(transcript);
        };

        // Gérez les erreurs
        recognition.onerror = (event) => {
            console.error("Erreur de reconnaissance vocale :", event.error);
        };
    }else {
        console.error("API Web Speech non prise en charge dans ce navigateur.");
    }
});