//CALCLATOR //

let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';

for (item of buttons) {
	item.addEventListener('click', (e) => {
		buttonText = e.target.innerText;
		console.log("text is ", buttonText);

		if (buttonText == 'X') {
			buttonText = '*';
			screenValue += buttonText;
			screen.value = screenValue;

			// console.log(screen.value)
		} else if (buttonText == 'C') {
			screenValue = "";
			screen.value = eval(i = 0, i--);


		} else if (buttonText == '=') {
			screen.value = eval(screenValue);


		} else if (buttonText == 'Del') {
			backspace = screen.value;
			delNum = backspace.slice(i = 0, i - 1);
			screenValue = delNum;
			screen.value = screenValue;
		}

		else {
			screenValue += buttonText;
			screen.value = screenValue;
		}

	})

};
