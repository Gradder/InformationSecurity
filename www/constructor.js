document.getElementById('frame').src = "generator_reshetok.html";
var button = document.getElementById('reload');
// console.log(button);
function refr()
{
	document.getElementById('frame').src = document.getElementById('frame').src;
}
button.addEventListener("click", refr);
