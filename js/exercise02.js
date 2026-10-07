/*------ Task 1 -------
*/
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Батьки дозволили?');
//   }
// }

function checkAge(age) {
  return age > 18 ? true : confirm('Батьки дозволили?');
}
function checkAge2(age) {
  return (age > 18 )|| confirm('Батьки дозволили?');
}

let ageInp = document.querySelector("#age-inp");
let permSpan = document.querySelector("#perm-span");

ageInp.addEventListener("change", function(){
   if (ageInp.value =="") {
    permSpan.innerHTML = "";
    permSpan.style = "display: hidden;";
    return;
   }

  if (checkAge2(ageInp.value)) {
    permSpan.innerHTML  = "Дозволено";
    permSpan.style = "color: darkgreen; background: yellow;";
    return true;

  } else {
    permSpan.innerHTML  = "Не дозволено";
    permSpan.style = "color: red; background: yellow;";
    return false;
  }
});

function min (a, b) {
  if  (Number(a ) <=  Number(b)) {
    return a
  } else return b;
}
function min1 (a, b) {
 return (Number (a) <= Number(b)) ? a : b;
}
let numb1 = document.querySelector("#numb1");
let numb2 = document.querySelector("#numb2");
let resSpan = document.querySelector("#min-numb");

let minCalcBtn = document.querySelector("#min-calc-btn");
let resBtn = document.querySelector("#reset-btn");
minCalcBtn.addEventListener("click", function (){
 
if ((isNaN(numb1.value))||(isNaN(numb2.value))||(numb1.value === "")||
  (numb2.value === "")) {
  resSpan.innerHTML = "*** Не правильно введені дані! ***";
  resSpan.style = "display: inline-block; color: darkred;";
  } else {
    let minVal;
    minVal = min1(numb1.value, numb2.value);
    resSpan.innerHTML = minVal;
    resSpan.style = "display: inline-block; width: 10vw; ";
}});

resBtn.addEventListener("click", function(){
  numb1.value= "";
  numb2.value = "";
  resSpan.innerHTML = "";
  resSpan.style = "display: hidden; ";
})

function pow(x,n){
  if (n == 1) {
  return x;
  } 
  return x * pow(x, n-1);
}

let baseNumb = document.querySelector("#base-numb");
let powerNumb = document.querySelector("#power-numb");
let rasePowerSpan = document.querySelector("#rase-to-power");
let rasePowerBtn = document.querySelector("#rase-to-power-btn");
let clearCalcBtn = document.querySelector("#clear-calc-btn");
 rasePowerBtn.addEventListener("click", function(){
  if ((baseNumb.value == "")|| (isNaN(baseNumb.value)) || (powerNumb.value == "")||
   (isNaN(powerNumb.value))){
    rasePowerSpan.innerHTML = "*** Введено неправильне значення ***";
    rasePowerSpan.style = "display: inline-block; color: darkred;";
  }  else {
    let x = baseNumb.value;
    let n = parseInt(powerNumb.value, 10);
    let res;
    if (x == 0) {
      res = 0;
    } else 
        if  (n > 0) {
          res = pow(x, n);
        } else if ( n < 0) {
            let nn = Math.abs(n);
            res = 1 / pow (x, nn);
          } else res = 1;
    rasePowerSpan.innerHTML = res;
    rasePowerSpan.style = "display: inline-block; width: 15vw; ";
  }});
  clearCalcBtn.addEventListener("click", function(){
  baseNumb.value= "";
  powerNumb.value = "";
  rasePowerSpan.innerHTML = "";
  rasePowerSpan.style = "display: hidden; ";
});

let askBtn = document.querySelector("#ask-btn"); 

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

askBtn.addEventListener("click", function(){
   ask(
  "Ви згодні?",
  () => alert("Ви погодились."),
  () => alert("Ви скасували виконання.")
)});





