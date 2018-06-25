class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	createNewDiv(text) {
		let div = document.createElement('div');
			div.textContent = text;

			div.style.cssText = `height: ${this.height};
								width: ${this.width};
								background-color: ${this.bg};
								font-size: ${this.fontSize};
								text-align: ${this.textAlign}`

		document.body.appendChild(div);
	}
}
let obj = new Options('400px', '400px', 'green', '16px', 'center');
obj.createNewDiv('Я все списал из трансляции!');

let obj2 = new Options('400px', '400px', 'red', '20px', 'left');
obj2.createNewDiv('Я все списал из трансляции!');