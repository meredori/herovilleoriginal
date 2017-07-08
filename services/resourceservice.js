app.factory('resources', function ($http,game) {

    resources.purchase = function(value) {
        if (game.resources >= value) {
            game.resources -= value;
            return true;
        }
        else {
            false;
        }

    }
    return resources;
});