/**
 * Here is the guess game!
 */

resetGame();
generatedNumber = generateANumber(maxOfGeneratedNumber);

// Game loop
while(currentStep < maxNumberOfStep){
    let userGuess = getUserGuess("Bitte geben Sie Ihre Zahl!", maxOfGeneratedNumber);
    
    if(userGuess == generatedNumber){
        feedback("Yeay! Sie haben das Spiel gewonnen!");
       if(confirm("Do you want to play again")){
          resetGame();
        } else {
          break;
        }
    } else { 
        if(userGuess < generatedNumber) {
        feedback("Lütfen sayiyi büyütünüz");
        } else {
        feedback("Lütfen sayiyi kücültünüz");
        }
    }
    
    currentStep++; // currentStep = currentStep + 1;
}

if(currentStep === 5){
    feedback("Oooh! Leider haben Sie das Spiel verloren!");
    resetGame();
}