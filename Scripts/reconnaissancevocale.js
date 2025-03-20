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
        console.log("Texte transcrit :", transcript);
    };

    // Gérez les erreurs
    recognition.onerror = (event) => {
        console.error("Erreur de reconnaissance vocale :", event.error);
    };
} else {
    console.error("API Web Speech non prise en charge dans ce navigateur.");
}
