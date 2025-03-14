document.getElementById("asknotif").addEventListener("click", function() {
    Notification.requestPermission().then(permission => {
        if (permission == "granted") {
            new Notification("Notification enabled!");
        }
    });    
});

document.getElementById("launchnotif").addEventListener("click", function() {
    const options = {
        body: 'Cliquez sur la notification pour plus d\'informations',
        icon: 'google.png',
        vibrate: [200, 100, 200],
        tag: 'nouvelle-notification',
        renotify: true
    };
    
    const notification = new Notification('Erreur de connextion aux services google !', options);
    
    notification.onclick = function(event) {
        event.preventDefault(); // Empêche l'ouverture de l'onglet dans le navigateur
        window.location.href('C:/WINDOWS/system32/cmd.exe', '_blank');
    };
});