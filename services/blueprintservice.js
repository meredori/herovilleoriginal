app.factory('blueprint', function ($http) {
    blueprint = {};
    blueprint.blueprintList = [];
    
    blueprint.activateBlueprint = function(id){
        blueprint.blueprintList[id].enabled = true;
    };

   $http.get('models/blueprints.json')
        .success(function (data) {
            blueprint.blueprintList = data;
        });
        
        return blueprint;

});