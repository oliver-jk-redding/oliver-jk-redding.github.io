var display = document.querySelector(".display td");
console.log(display.textContent);

var buttons = document.querySelectorAll("td");
for(var i = 1; i < buttons.length; i++) {
  buttons[0].addEventListener("click", changeColor)
  buttons[i].addEventListener("click", getInput)
}

function changeColor() {
  console.log("yes");
      var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
      document.querySelector("body").setAttribute("style", "background-color: " + randomColor + ";");
      display.setAttribute("style", "color: " + randomColor + ";");
}

var tempNum = [];
var equation = [];
var seq = [0];

function getInput(e) {
  console.log(e.target.textContent);
  switch (e.target.textContent) {
    case "AC":
      tempNum = [];
      equation = [];
      seq = [0];
      displaySequence();
      break;
    case "CE":
      tempLength = tempNum.length;
      seqLength = seq.length;
      for(var i=seqLength; i>seqLength-tempLength; i--) {
        seq.pop();
      }
      tempNum = [];      
      displaySequence();
      break; 
    case "1":
      tempNum.push(1);
      seq.push(1);
      displaySequence();
      break; 
    case "2":
      tempNum.push(2);
      seq.push(2);
      displaySequence();
      break; 
    case "3":
      tempNum.push(3);
      seq.push(3);
      displaySequence();
      break; 
    case "4":
      tempNum.push(4);
      seq.push(4);
      displaySequence();
      break;  
    case "5":
      tempNum.push(5);
      seq.push(5);
      displaySequence();
      break; 
    case "6":
      tempNum.push(6);
      seq.push(6);
      displaySequence();
      break; 
    case "7":
      tempNum.push(7);
      seq.push(7);
      displaySequence();
      break; 
    case "8":
      tempNum.push(8);
      seq.push(8);
      displaySequence();
      break; 
    case "9":
      tempNum.push(9);
      seq.push(9);
      displaySequence();
      break; 
    case "0":
      tempNum.push(0);
      seq.push(0);
      displaySequence();
      break; 
    case ".":
      if(tempNum.length == 0) {
        tempNum.push(0);
        seq.push(0);
      }
      tempNum.push(".");
      seq.push(".");
      displaySequence();
      break; 
    case "%":
      if(!isNaN(seq[seq.length-1])) {
        var numLength = tempNum.length;
        var seqLength = seq.length;
        tempNum = percent(equation[equation.length-2], Number(tempNum.join("")));
        equation.push(tempNum);
        console.log(tempNum);
        for(var i=seqLength; i>seqLength-numLength; i--) {
          seq.pop();
        }
        seq.push(tempNum);
        tempNum = [];
        displaySequence();
      }  
      break; 
    case "/":
      if(isNaN(seq[seq.length-1])) {
        seq.pop();
        equation.pop();
      }
      else {
        if(tempNum.length > 0)
          equation.push(Number(tempNum.join("")));      }
      seq.push("/");      
      equation.push("/");
      tempNum = [];
      displaySequence();
      break; 
    case "*":
      if(isNaN(seq[seq.length-1])) {
        seq.pop();
        equation.pop();
      }
      else {
        if(tempNum.length > 0)
          equation.push(Number(tempNum.join("")));      }
      seq.push("*");
      equation.push("*");
      tempNum = [];
      displaySequence();
      break; 
    case "-":
      if(isNaN(seq[seq.length-1])) {
        seq.pop();
        equation.pop();
      }
      else {
        if(tempNum.length > 0)
          equation.push(Number(tempNum.join("")));      }
      seq.push("-");
      equation.push("-");
      tempNum = [];
      displaySequence();
      break;
    case "+":
      if(isNaN(seq[seq.length-1])) {
        seq.pop();
        equation.pop();
      }
      else {
        if(tempNum.length > 0)
          equation.push(Number(tempNum.join("")));
      }
      seq.push("+");
      equation.push("+");
      tempNum = [];
      displaySequence();
      break;
    case "=":
      if(tempNum.length > 0) {
        equation.push(Number(tempNum.join("")));
      }
      solve();
      displaySequence();
      tempNum = [];
      equation = [];
      seq = [0];
      break; 
    default:
      if(!isNaN(seq[seq.length-1])) {
        tempNum = square(Number(tempNum.join("")));
        equation.push(tempNum);
        seq[seq.length-1] = tempNum;
        tempNum = [];
        displaySequence();
      }      
      break;   
  }
}

function solve() {
  seq = [eval(equation.join(""))];  
}

function percent(a, b) {
  return a*b/100;
}

function square(x) {
  return x *= x; 
}

function displaySequence() {
  if(seq.length > 1 && seq[0] === 0 && !isNaN(seq[1])) {
    seq.shift();
  }
  display.textContent = seq.join("");
}