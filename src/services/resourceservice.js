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

    resources.incrRes = function (multi) {
        multi = multi || 1;
        game.gameStats.clicks++;
        if ((game.resources + multi) < game.maxResources) {
            game.resources += (multi);

        }
        else {
            game.resources = game.maxResources;
        }
    }
    return resources;
});