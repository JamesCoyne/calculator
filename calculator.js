var currInput = "";
var in1 = 0;
var in2 = 0;
var final = 0;
var op = "";

function setText(i){
  document.getElementById("numbers").innerHTML = i;
}

function conc(id) {
  currInput += id;
  setText(currInput);
}

function cle(){
  currInput = "";
  setText("0");
}

function backsp(){
  currInput = currInput.slice(0,-1);
  if(currInput.length > 0) setText(currInput);
  else setText("0");
}

function aClear(){
  currInput = "";
  in1 = 0;
  in2 = 0;
  op = "";
  setText("0");
}

function mat(id){
  op = id;
  in1 = parseInt(currInput);
  cle();
}

function equals(){
  in2 = parseInt(currInput);
  switch (op) {
    case "+":
      final = in2 + in1;
      break;
    case "-":
      final = in1 - in2;
      break;
    case "*":
      final = in1 * in2;
      break;
    case "/":
      final = in1 / in2;
      break;
    default:
      final = parseInt(currInput);
  }
  setText(final);
  in1 = 0;
  in2 = 0;
  op = "";
}
