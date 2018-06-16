let openBtn = document.getElementById('open-btn');
	nameVal = document.getElementsByClassName('name-value');
	budVal = document.getElementsByClassName('budget-value');
	goodVal = document.getElementsByClassName('goods-value');
	itemVal = document.getElementsByClassName('items-value');
	emplVal = document.getElementsByClassName('employers-value');
	discVal = document.getElementsByClassName('discount-value');
	isOpVal = document.getElementsByClassName('isopen-value');
	goodItems = document.getElementsByClassName('goods-item');
	btnBox = document.getElementsByClassName('main-functions');
	goods_btn = document.getElementsByTagName("button")[1];
	budget_btn = document.getElementsByTagName("button")[2];
	emploeyers_btn = document.getElementsByTagName("button")[3];
	inpGoodIt = btnBox[0].querySelector('#items');
	inpTime =  btnBox[0].querySelector('#time');
	inpBudg = btnBox[0].querySelector('#budget');
	inEmplt = btnBox[0].querySelectorAll('.hire-employers-item');

var budget,
	price = 100;

openBtn.addEventListener('click', () => {
	budget = prompt("Ваш бюджет на месяц?", "");
		while (isNaN(budget) || budget == '' || budget == null) {
		budget = prompt("Ваш бюджет на месяц?", "");
		}
	budVal[0].textContent = budget;

	nameVal[0].textContent = prompt("Название вашего магазина?").toUpperCase();

})

console.log(goods_btn);
console.log(goodVal[0]);


goods_btn.addEventListener('click', () => {
	for (let i = 0; i < inpGoodIt.length; i++) {
			let a = inpGoodIt[i].value;
			if ((typeof(a) === 'string' && a != null && a.length < 50)) {
				console.log("Все правильно!");
				mainList.shopGoods[i] = a;
				goodVal[0].textContent = mainList.shopGoods;
			} else {
				i = i - 1;
			}
		}	
});


var mainList = {
	budget,
	name,
	shopGoods: [],
	emploeyers: {},
	discount: true,
	open: true,
	time: 23,
	shopItems: [],
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

/*mainList.chooseGoods();
	console.log(mainList.shopGoods);*/

/*mainList.workTime();*/
/*mainList.dayBudget();*/
/*mainList.disc();*/
/*mainList.emplName();
	console.log(mainList.emploeyers);*/

/*mainList.chooseShopItems();
	console.log(mainList.shopItems);*/

/*mainList.shopItems.forEach(function(item,i,arr) {
	alert('У нас вы можете приобрести: ' + (i+1) + '- ' +  item);
})*/

	/*for (var prop in mainList) {
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
