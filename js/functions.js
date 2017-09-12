/**
 * Please provide all your functions in this file.
 */

let currentStep = 1;
let maxNumberOfStep = 5;
let maxOfGeneratedNumber = 100;
let generatedNumber = null;


function generateANumber(pMax){
    return pMax = Math.random()*maxOfGeneratedNumber;
    // random methodu 0 ile 1 arasinda 0,....  küsürlü bir sayi verir
    // 100 ile carparak 0 ile 100 arasinda bir sayi elde etmis oluruz
}

function resetGame(){
   currentStep = 1;
   maxNumberOfStep = 5;
   maxOfGeneratedNumber = 100;
   generatedNumber = generateANumber(maxOfGeneratedNumber);
}

function getUserGuess(pText, pMax){
    return prompt(pText);
}

function feedback(pText){
    alert(pText);
}