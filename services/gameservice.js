app.factory('game', function ($http) {
    game = {};
    game.heroes = [];
    game.weapons = [];
    game.resources = 0;
    game.maxResources = 25;
    game.gold = 0;
    game.maxGold = 0;
    game.buildings = [
        {
            id: 0,
            count: 0,
            name: "Tent",
            cost: 5,
            multiplier: 4,
            description: "This building allows heroes to join the town."
        }
    ];
    game.gameStats = {};
    game.gameStats.clicks = 0;
    game.saveGame = function (currGame) {
        localStorage["data"] = JSON.stringify(currGame);
    }

    game.loadGame = function () {
        currGame = JSON.parse(localStorage["data"]);
        game.resources = currGame.resources;
        game.gold = currGame.gold;
        game.buildings = currGame.buildings;
    }

    game.reset = function() {
        localStorage.removeItem("data");
        location.reload();
    }

    return game;
});