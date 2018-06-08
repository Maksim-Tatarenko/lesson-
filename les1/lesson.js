var budget,
	name,
	time,
	price = 100

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
	open: true
};
	function chooseGoods() { 
		for (let i = 0; i < 3; i++) {
		let a = prompt('Какой тип товара будем продавать?');
		mainList.shopGoods[i] = a;
		if ((typeof(a) === 'string' && (typeof(a)) != null && a != " " && a.lenght < 50)) {
			console.log("Все правильно!");
			
			
	} else {
}
}
}
chooseGoods();
console.log(mainList.shopGoods);

	
	function dayBudget() {
	 	document.write("Дневной бюджет составляет " + budget/30 + " р.");
 } 
 
 dayBudget();
 
 price = 100;

	 function disc() {
	 	if (mainList.discount == true) {
	 		console.log(price * 0.8);
 	} 
 	
 }
 disc();

	function emplName () {
		for (let i = 1; i <= 4; i++) {
	 	mainList.emploeyers[i] = prompt('Имя сотрудника');
 	 }
 	}
 emplName();
 	 //console.log(mainList.emploeyers);
/*let i = 0;
while (i < 3) {
	mainList.shopGoods[i] = prompt ('Какой тип товара будем продавать?'); i++;
	}*/
/*let i = 0;
	do {
		mainList.shopGoods[i] = prompt('Какой тип товара будем продавать?'); i++;
	}
	while( i < 3);*/
	
/*mainList.shopGoods[0] = prompt('Какой тип товара будем продавать?');
mainList.shopGoods[1] = prompt('Какой тип товара будем продавать?');
mainList.shopGoods[2] = prompt('Какой тип товара будем продавать?');*/
