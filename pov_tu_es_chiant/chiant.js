let body = document.querySelector("body");

const colorCodes = [
    "#FF0000", // Rouge
    "#00FF00", // Vert
    "#0000FF", // Bleu
    "#FFFF00", // Jaune
    "#00FFFF", // Cyan
    "#FF00FF", // Magenta
    "#FFA500", // Orange
    "#800080", // Violet
    "#FFC0CB", // Rose
    "#A52A2A", // Marron
    "#808080", // Gris
    "#000000", // Noir
    "#FFFFFF", // Blanc
    "#008080", // Sarcelle
    "#FFD700", // Or
    "#C0C0C0", // Argent
    "#E6E6FA", // Lavande
    "#F5F5DC", // Beige
    "#FA8072",  // Saumon
    "#4B0082", // Indigo
    "#7FFFD4", // Aquamarine
    "#FFE4B5", // Moccasin
    "#FF6347", // Tomato
    "#4682B4", // SteelBlue
    "#D2691E", // Chocolate
    "#8B0000", // DarkRed
    "#00FA9A", // MediumSpringGreen
    "#B0E0E6", // PowderBlue
    "#2E8B57", // SeaGreen
    "#5F9EA0", // CadetBlue
    "#FF4500", // OrangeRed
    "#6A5ACD", // SlateBlue
    "#7CFC00", // LawnGreen
    "#F0E68C", // Khaki
    "#87CEEB", // SkyBlue
    "#20B2AA", // LightSeaGreen
    "#DA70D6", // Orchid
    "#FF1493", // DeepPink
    "#EE82EE"  // Violet
];

function randomColor(){
    return colorCodes[Math.floor(Math.random() * colorCodes.length)];
}

setInterval(function(){
    body.style.backgroundColor = randomColor();
    body.style.color = randomColor();
}, 10);

