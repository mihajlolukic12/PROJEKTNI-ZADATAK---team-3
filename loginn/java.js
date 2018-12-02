function randomizer() {
	var a = Math.ceil(Math.random() * 9)+ '';
	var b = Math.ceil(Math.random() * 9)+ '';
	var c = Math.ceil(Math.random() * 9)+ '';
	var d = Math.ceil(Math.random() * 9)+ '';
	var e = Math.ceil(Math.random() * 9)+ '';

	var rez = a + b + c + d + e;
	document.getElementById('brojevi').value = rez;
}


function provera() {
	if(document.getElementById('ukucaniBrojevi').value == document.getElementById('brojevi').value)
		{
			document.getElementById('divallinone').style.display = "block";
			document.getElementById('captcha').style.display = "none";
		}
}