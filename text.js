const adjectives = ["amazing", "ambrosial", "appetising", "awesome", "delectable", "delicate", "delightful", "divine", "enticing", "ephereal", "excellent", "exquisite", "fabulous", "good", "gorgeous", "gratifying", "great", "heavenly", "loving", "luscious", "marvellous", "pleasant", "pleasing", "pleasurable", "precious", "satisfying", "savoury", "scrumptious", "splendid", "superb", "tasty"];
let xIncrement = 1;
let yIncrement = 1;

function updateColour() {
	document.getElementById("text").innerHTML = adjectives[Math.floor(Math.random() * adjectives.length)]
	document.getElementById("text").style.color = `hsl(${Math.floor(Math.random() * 360)}, 35%, 50%)`;
}

function handleCollision() {
	if (document.getElementById("text").offsetLeft <= 0 || document.getElementById("text").offsetLeft + document.getElementById("text").offsetWidth >= window.innerWidth) {
		xIncrement = ~xIncrement + 1;
		updateColour();
	}
	if (document.getElementById("text").offsetTop <= 0 || document.getElementById("text").offsetTop + document.getElementById("text").offsetHeight >= window.innerHeight) {
		yIncrement = ~yIncrement + 1;
		updateColour();
	}
}

function frame() {
	handleCollision();
	document.getElementById("text").style.top = document.getElementById("text").offsetTop + yIncrement;
	document.getElementById("text").style.left = document.getElementById("text").offsetLeft + xIncrement;
}

updateColour();
setInterval(frame, 5);
