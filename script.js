var about = document.getElementById('about');
var way = document.getElementById('way');
var equipment = document.getElementById('equipment');
var metka_about = document.querySelector('.metka_about');
var metka_way = document.querySelector('.metka_way');
var metka_equipment = document.querySelector('.metka_equipment');
metka_about.onclick = function () { scrollToElement(about) }
metka_way.onclick = function () { scrollToElement(way) }
metka_equipment.onclick = function () { scrollToElement(equipment) }

window.addEventListener('scroll', function() {
	Visible (about,metka_about);
	Visible (way,metka_way);
	Visible (equipment,metka_equipment);
});

function scrollToElement(theElement) {
	var selectedPosY = theElement.offsetTop - 90;
	window.scrollTo(0, selectedPosY);
}

var Visible = function (target,metka) {
	// Все позиции элемента
	var targetPosition = {
		top: window.pageYOffset + target.getBoundingClientRect().top,
		left: window.pageXOffset + target.getBoundingClientRect().left,
		right: window.pageXOffset + target.getBoundingClientRect().right,
		bottom: window.pageYOffset + target.getBoundingClientRect().bottom
	  },
	  // Получаем позиции окна
	  windowPosition = {
		top: window.pageYOffset,
		left: window.pageXOffset,
		right: window.pageXOffset + document.documentElement.clientWidth,
		bottom: window.pageYOffset + document.documentElement.clientHeight
	  };
  
	if (targetPosition.bottom > windowPosition.top + 100 && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
	  targetPosition.top < windowPosition.top + 100 && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
	  targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
	  targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
	 metka.classList.add("active_scrol");
	} else {
	 metka.classList.remove("active_scrol");
	};
	};
	
document.querySelectorAll('h2.promo-title').forEach(title => title.style.margin = `${window.innerHeight/1080*10}vh 0 ${window.innerHeight/1080*5}vh 0`)