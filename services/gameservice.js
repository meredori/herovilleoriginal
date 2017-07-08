app.factory('game',function($http) {
    game = {};
    game.resources = 0;
    game.buildings = {};
    save.saveGame = function(){
        localStorage["data"] = JSON.stringify(game);
    }

    return game;
});