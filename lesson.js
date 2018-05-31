var budget = prompt("Ваш бюджет на месяц?");
var name = prompt("Название вашего магазина?");
var shopGoods = new Array(3);
var mainList = {
	budget,
	name,
	shopGoods,
	emploeyers: {},
	open: true
};
shopGoods[0] = prompt('Какой тип товара будем продавать?');
shopGoods[1] = prompt('Какой тип товара будем продавать?');
shopGoods[2] = prompt('Какой тип товара будем продавать?');
document.write("Дневной бюджет составляет " + budget/30 + " р.");