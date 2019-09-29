const utils = require("./utils.js");

/**
 * Task 1
 *
 * Use case:
 *
 * Kasutaja sisestab väärtusi vormi väljadesse. Igal väljal on piirangud,
 * mis andmeid sinna võib sisestada.
 *
 * Realiseeri funktsioon, mis kontrollib numbri välja valiidsust.
 *
 * @param precision - Defineerib, kui  palju numbreid võib sisestatud väärtuses maksimaalselt olla.
 * @param scale - Defineerib, kui palju numbreid võib olla maksimaalselt pärast koma
 *
 * Vaata teste näidete jaoks.
 */
const isNumberValid = (inputString, {precision = 9, scale = 0}) => {
  if(isString(inputString)) return false;
  
  let [digitsBefore, digitsAfter] = inputString.split(".");
  digitsAfter = digitsAfter ? digitsAfter.length : 0;
  digitsBefore = digitsBefore.length;

  if(digitsBefore + digitsAfter > precision) return false;

  if(digitsAfter > scale ) return false;

  if(inputString.indexOf(".")>=0 && digitsAfter === 0) return false;
 
  return true;


};


const isString = (x) => isNaN(x);


console.log("Task 1");

utils.test(isNumberValid("200.345",{}), false); // scale default value is 0
utils.test(isNumberValid("200.345",{scale: 10}), true);
utils.test(isNumberValid("200.345",{precision: 3, scale: 10}), false);
utils.test(isNumberValid("200",{scale: 0}), true);
utils.test(isNumberValid("200.not",{scale: 0}), false); // not a number
utils.test(isNumberValid("0",{}), true);
utils.test(isNumberValid("10.32",{scale: 1}), false);
utils.test(isNumberValid("10.32",{scale: 3}), true);
utils.test(isNumberValid("10.",{scale: 0}), false); // number valid, but scale too low

console.log("Task 2");

/**
 * Task 2
 *
 * Realiseeri funktsioon, millel on 3 parameetrit: "a", "b", "cb".
 *
 * Esimesed kaks parameetrit on numbrid ja viimane parameeter on funktsioon, kutsume seda "callback".
 *
 * Funktsioon peab kutsuma välja callback funktsiooni, mille argumendiks on antud "a" ja "b" summa.
 *
 * Vaata teste näidete jaoks.
 *
 */
const sumCallback = (a, b, cb) => cb(a+b);

/**
 * Utility function. Don't change me!
 */
function myCallback(x){
  return "hello-"+x;
}

utils.test( sumCallback(2,3, myCallback), "hello-5");
utils.test( sumCallback(0,-2, myCallback), "hello--2");

console.log("Task 3");

/**
 * Task 3
 *
 * Realiseeri funktsioon, mis liidab 2 numbrit kokku. Funktsioon peaks nägema välja midagi sellist.
 *
 * add(2)(3) // returns 5
 * add(0)(0) // return 0
 *
 * ehk argumendid peavad olema erinevates sulgudes.
 *
 */
const add = (a) => b => {
    return a + b;
};

try{
  utils.test( add(2)(3),5 );
  utils.test( add(0)(0),0 );
}
catch(e){
  console.log("FAIL: implement task 3")
}
