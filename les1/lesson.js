var budget = prompt("Ваш бюджет на месяц?");
var name = prompt("Название вашего магазина?");
var mainList = {
	budget,
	name,
	shopGoods: [],
	emploeyers: {},
	open: true
};

for (let i = 0; i < 3; i++) {
	let a = prompt('Какой тип товара будем продавать?');
	mainList.shopGoods[i] = a;
}
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
document.write("Дневной бюджет составляет " + budget/30 + " р.");