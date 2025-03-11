alert("Bien joué ! Tu as trouvé la page secrette ! Amuses-toi bien !");

let bouton = document.getElementById('boutonsah');

bouton.addEventListener('click', function(){
    alert('La page web a été supprimée !');
    document.body.innerHTML = '';
});