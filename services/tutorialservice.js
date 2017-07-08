app.factory('tutorial',function($http) {
    var tutorial = {};
    currentStep = 0;
    tutorial.skipSteps = [];   
    tutorial.steps = null;
    tutorial.panel = "";

    tutorial.completeStep = function(stepNumber){
        if(!tutorial.skipSteps.find(x => x == stepNumber))
        {
            tutorial.skipSteps.push(stepNumber);
            if(currentStep == stepNumber){
                tutorial.nextStep();
            }
        }

    }

    tutorial.nextStep = function(){
        currentStep++;
        while(tutorial.skipSteps.find(x => x == currentStep)){
            currentStep++;
        }
        tutorial.currentPanel();
        
    }

    tutorial.currentPanel = function(){
        tutorial.panel = tutorial.steps[currentStep];
    }

    $http.get('models/tutorial.json')
    .success(function (data) {
        tutorial.steps = data;
     });



    return tutorial;
});