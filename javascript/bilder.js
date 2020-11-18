var schließen = document.getElementsByClassName("schließen")[0];
var bilder1 = document.getElementById("Bilder1");
var bigbild = document.getElementById("bigbild");
var bildtext = document.getElementById("bildtext");


function clickmich(element){
	bigbild.src = element.src;
	bigbild.alt = element.alt;
	bildtext.innerHTML = element.alt;
	bilder1.style.display = "block";
}

schließen.onclick = function() {
	bilder1.style.display = "none";
}