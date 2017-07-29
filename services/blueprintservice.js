app.factory('blueprint', function ($http) {
    blueprint = {};
    return blueprint;

   $http.get('models/blueprints.json')
        .success(function (data) {
            building.buildingList = data;
        });

});