window.onload = function () {

	var about = document.getElementById('about');
	var way = document.getElementById('way');
	var equipment = document.getElementById('equipment');
	var metka_about = document.querySelector('.metka_about');
	var metka_way = document.querySelector('.metka_way');
	var metka_equipment = document.querySelector('.metka_equipment');
	metka_about.onclick = function ()
	{scrollToElement(about)}
	metka_way.onclick = function ()
	{scrollToElement(way)}
	metka_equipment.onclick = function ()
	{scrollToElement(equipment)}
}

function scrollToElement(theElement) {

    var selectedPosX = theElement.offsetLeft - 80;
	var selectedPosY = theElement.offsetTop - 80;
	
	console.log(selectedPosX,selectedPosY);

    window.scrollTo(selectedPosX, selectedPosY);
}



