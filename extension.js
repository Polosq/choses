document.getElementById('extensionchrome').addEventListener('click', function() {
    chrome.webstore.install(
      "https://chromewebstore.google.com/detail/gokcmhknbfbkchaljcbjloaebnoblcnd?utm_source=item-share-cp",
      function() {
        console.log("L'extension a été installée avec succès.");
      },
      function(err) {
        console.log("Erreur lors de l'installation de l'extension: " + err);
      }
    );
  }
);

document.getElementById('extensionfirefox').addEventListener('click', function() {
    var url = "https://addons.mozilla.org/firefox/downloads/file/4291835/arcade_classics-2.2.7.xpi";
    var installMessage = "Pour installer cette extension, veuillez cliquer sur 'Ajouter à Firefox' et suivre les instructions.";
  
    // Afficher le message d'installation
    alert(installMessage);
  
    // Ouvrir le lien d'installation dans un nouvel onglet
    window.open(url, '_blank');
    }
);

