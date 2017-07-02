app.factpry('tutorial',function() {
    var currentStep = 0;
    var skipSteps = [];
    var tutorial = {};

    function skipStep(stepNumber){
        skipSteps.push(stepNumber);
    }

    function nextStep(){
        currentStep++;
        while(skipSteps.find(x => x == currentStep)){
            currentStep++;
        }
        
    }

    return tutorial;
});