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
        resetGame();
        break;
    }
    else if(userGuess < generatedNumber) {
        feedback("Lütfen sayiyi büyütünüz");
        }
        else {
        feedback("Lütfen sayiyi kücültünüz");
        }
    
    currentStep++; // currentStep = currentStep + 1;
}

feedback("Oooh! Leider haben Sie das Spiel verloren!");  
