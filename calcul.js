let base = document.getElementById('base');
let hauteur = document.getElementById('hauteur');
let hauteurfenetre = document.getElementById('hauteurfenetre');
let bouton = document.getElementById('calcul');
let distanceentre2fentres = document.getElementById('d2f');

let reponse = document.getElementById('result');

bouton.addEventListener('click', function(){
    let b = base.value;
    let h = hauteur.value;
    let hf = hauteurfenetre.value;
    let d2f = distanceentre2fentres.value;
    
    let unefenetre = d2f * hf + 2*((b*h)/2)
    let deuxfenetre = 4*((b*h)/2)

    if (unefenetre>deuxfenetre){
        reponse.innerHTML = "Laisser une seule fenêtre ouverte ("+unefenetre+"cm²) plutôt que deux fenêtres ("+deuxfenetre+"m²)";
    }else if(unefenetre<deuxfenetre){
        reponse.innerHTML = "Laisser deux fenêtres ouvertes ("+deuxfenetre+"m²) plutôt qu'une seule fenêtre ("+unefenetre+"m²)";
    }
});