document.getElementById("asknotif").addEventListener("click", function() {
    Notification.requestPermission().then(permission => {
        if (permission == "granted") {
            document.getElementById("FAVEEEEE").play();
            new Notification("Notification enabled !", {
                body : "FAVEEEE",
            });
        }
    });    
});

document.getElementById("launchnotif").addEventListener("click", function() {
    const options = {
        body: 'Cliquez sur la notification pour plus d\'informations',
        icon: 'Images/google.png',
        vibrate: [200, 100, 200],
        tag: 'nouvelle-notification',
        renotify: true
    };
    
    const notification = new Notification('Erreur de connextion aux services google !', options);
    
    notification.addEventListener("click", function(event) {
        event.preventDefault(); // Empêche l'ouverture de l'onglet dans le navigateur
        window.location.href = 'https://polosq.github.io/choses/pov_tu_es_chiant/chiant.html';
    });
});