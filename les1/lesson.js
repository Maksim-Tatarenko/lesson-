var budget,
	name,
	time,
	price = 100;

function start () {
	budget = prompt("Ваш бюджет на месяц?");

	while (isNaN(budget) || budget == '' || budget == null) {
		start(budget);
	}

	name = prompt("Название вашего магазина?").toUpperCase();
	console.log(name);
}

start();

var mainList = {
	budget,
	name,
	shopGoods: [],
	emploeyers: {},
	discount: true,
	open: true,
	time: 23,
	shopItems: [],
	chooseGoods: function chooseGoods() { 
		for (let i = 1; i < 4; i++) {
			let a = prompt('Какой тип товара будем продавать?');
			
			if ((typeof(a) === 'string' && a != null && a != "" && a.length < 50)) {
				console.log("Все правильно!");
				mainList.shopGoods[i] = a;
			} else {
				i--;
			}
		}	
	},
	workTime: function workTime(time) {
			if (time < 0) {
				console.log('Такого не может быть.');	
			} 	else if (time > 8 && time < 20) {
					console.log('Время работать!');
					mainList.open = true;
				}	else if (time > 24) {
						console.log('Уже слишком поздно!');
					}	else {
							console.log('В сутках только 24 часа!')
						}
	},
	dayBudget: function dayBudget() {
		document.write("Дневной бюджет составляет " + budget/30 + " р.");
	}, 
	disc: function disc() {
		if (mainList.discount == true) {
			console.log(price * 0.8);
		}	else {
				console.log(price);
			}
	},
	emplName: function emplName () {
		for (let i = 1; i <= 4; i++) {
			mainList.emploeyers[i] = prompt('Имя сотрудника');
		}
	},
	chooseShopItems: function chooseShopItems () {
		let items = prompt('Перечислите все товары через запятую', "");
			if (typeof(items) === 'string' && items != null && items != '') {		
				mainList.shopItems = items.split(",");
				mainList.shopItems.push(prompt('Подумайте еще', ""));
				mainList.shopItems.sort(); 
			}	else {
					items = prompt('Введите правельные данные.');
				}
	}
}

mainList.chooseGoods();
	console.log(mainList.shopGoods);
mainList.workTime();
mainList.dayBudget();
mainList.disc();
mainList.emplName();
	console.log(mainList.emploeyers);
mainList.chooseShopItems();
	console.log(mainList.shopItems);




/*mainList.shopGoods.forEach(function(item,i,arr) {
	alert('У нас вы можете преобрести: ' + i + ': ' + arr[i]);
})

for (var prop in mainList) {
	console.log("Наш магазин содержит: " + (prop + ': ' + mainList[prop]));
}*/
 
//console.log(mainList.emploeyers);
/*
let i = 0;
while (i < 3) {
	mainList.shopGoods[i] = prompt ('Какой тип товара будем продавать?'); i++;
}
*/
/*
let i = 0;
do {
	mainList.shopGoods[i] = prompt('Какой тип товара будем продавать?'); i++;
}
while( i < 3);
*/
	
/*
mainList.shopGoods[0] = prompt('Какой тип товара будем продавать?');
mainList.shopGoods[1] = prompt('Какой тип товара будем продавать?');
mainList.shopGoods[2] = prompt('Какой тип товара будем продавать?');
*/
