document.body.innerHTML +="<h1>Níže naleznete výsledek převodu Vámi zadané teploty. Výsledek je zobrazen zaokrouhleně na celé číslo.</h1>"


const degreeFahrenheit = prompt("Napište teplotu ve stupních Fahrenheita (pouze číslo) a stiskněte OK nebo enter na klávesnici");

document.body.innerHTML += "<h2>" + degreeFahrenheit + "°F" + " " + " => " + Math.round((5 / 9 * (degreeFahrenheit - 32))) + "°C" + "</h2>"