//function for add
function add() {
  num1 = Number(document.getElementById("angka1").value);
  num2 = Number(document.getElementById("angka2").value);
  add = num1 + num2;
  result = document.getElementById("result").innerHTML = "result = " + add;
}

//function for substract
function substract() {
  num1 = Number(document.getElementById("angka1").value);
  num2 = Number(document.getElementById("angka2").value);
  substract = num1 - num2;
  result = document.getElementById("result").innerHTML = substract;
}

//function for multiply
function multiply() {
  num1 = Number(document.getElementById("angka1").value);
  num2 = Number(document.getElementById("angka2").value);
  multiply = num1 * num2;
  result = document.getElementById("result").innerHTML = multiply;
  return result;
}

//function for division
function division() {
  num1 = Number(document.getElementById("angka1").value);
  num2 = Number(document.getElementById("angka2").value);
  division = num1 / num2;
  result = document.getElementById("result").innerHTML = division;
  return result;
}

//function for modulo
function modulo() {
  num1 = Number(document.getElementById("angka1").value);
  num2 = Number(document.getElementById("angka2").value);
  modulo = num1 % num2;

  var x = document.createElement("p");
  x.textContent = "result modulo = " + modulo;
  document.body.appendChild(x);

}


//getting button class
var button1 = document.getElementById("add");
var button2 = document.getElementById("substract");
var button3 = document.getElementById("multiply");
var button4 = document.getElementById("division");
var button5 = document.getElementById("modulo");



//callback while clicking button
button1.addEventListener("click", add);
button2.addEventListener("click", substract);
button3.addEventListener("click", multiply);
button4.addEventListener("click", division);
button5.addEventListener("click", modulo);
