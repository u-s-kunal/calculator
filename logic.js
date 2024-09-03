let input = document.getElementById("input");
let finalBtn = document.getElementById("finalBtn");
let calBtns = document.querySelectorAll("button");
let del = document.getElementById("del");
let log = console.log;
let SpCalText = "";

// BUTTON VALUE LOGIC

for (let i = 0; i < calBtns.length; i++) {
  calBtns[i].onclick = () => {
    event.preventDefault();
    let calBtnText = event.target.innerText;

    if (calBtnText == "AC") {
      console.log('ac');
      input.value = " ";
    } else if (calBtnText == "DEL") {
      console.log('del');
      let Delvalue = (input.value).slice(0, -1);
      input.value = Delvalue;

    } else if (calBtnText == "( )") {
      console.log('()')
      input.value += '(';
      calBtns[i].onclick = () => {
        event.preventDefault();
        input.value += ')';
      };
    } else {
      input.value += calBtnText;
    }
  };
}

finalBtn.onclick = () => {
  event.preventDefault();
  let final_string = input.value;
  console.log(eval(final_string));
  input.value = eval(final_string);
};
