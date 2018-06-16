let menuIt = document.getElementsByTagName('li');
let menu = document.getElementsByTagName('ul');
	menu[0].insertBefore(menuIt[2], menuIt[1]);
let newLi = document.createElement('li');
	newLi.innerHTML = 'Пятый элемент';
	newLi.className = 'menu-item';
	menu[0].appendChild(newLi);

let body = document.getElementsByTagName('body');
console.log(body);
body[0].style.backgroundImage = 'url(img/apple_true.jpg)';

let title = document.getElementById('title');
console.log(title);
	title.innerHTML = 'Мы продаем только подлинную технику Apple';

let adv = document.getElementsByClassName('adv');
	console.log(adv);
let parent = adv[0].parentElement;
	parent.removeChild(adv[0]);

let promptId = document.getElementById('prompt');
	console.log(promptId);
let howApple = prompt('Как вы относитесь к технике Apple?');
let p = document.createElement('p');
p.innerHTML = howApple;
promptId.appendChild(p);
