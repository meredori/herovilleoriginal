app.factory('items', function ($http) {
    items = {};
    items.weapons = {};
    items.potions = {};


    
    $http.get('models/weapons.json')
        .success(function (data) {
            items.weapons = data;
        });


    return items;
});