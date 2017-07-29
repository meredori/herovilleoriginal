app.factory('building', function ($http, resources, game, blueprint, tutorial, items, heroes, dungeons, blueprint) {
    building = {};
    building.buildingList = null;
    building.fullBuilding = [];

    building.upgrade = function (b){
        if (resources.purchase(building.cost(b))) {
            if(b.single){
                game.buildings.splice(b.id,1);
            }
            else {
               game.buildings[b.id].count++;     
            }                       
            switch (b.id) {
                //Building Tent
                case 0: {
                    $("#dialog").dialog("open");
                    if (b.count == 5) {
                        blueprint.activateBlueprint(3);
                    }
                    tutorial.completeStep(2);
                    dungeons.initialize();
                    building.getBuilding(1);
                    break;
                }
                // Building Stockpile
                case 1: {
                    building.getBuilding(2);
                    blueprint.activateBlueprint(2);
                    tutorial.completeStep(5);
                    game.maxResources = b.cost + Math.floor(b.cost/10);
                    game.maxGold = Math.floor(b.cost/10);
                    break;
                }
                //Building Market
                case 2: {
                    blueprint.activateBlueprint(2);
                    tutorial.completeStep(12);
                    break;
                }
                //Building Blacksmith
                case 3: {
                    items.activateWeapon(b.count);
                    tutorial.completeStep(14);
                    if (b.count == items.weapons.length) {
                        game.buildings.splice(id,1);
                    }
                    if (b.count % 3 == 0) {
                        heroes.jobs[2].limit++;
                    }
                    heroes.enableJob(2);
                    break;
                }
                //Build Tavern
                case 4: {
                    $scope.upgEnabled = false;
                    getBuilding(9);
                    tutorial.completeStep(18);
                    break;
                }
                //Build Alchemist
                case 5: {
                    if (b.count == items.weapons.length) {
                        game.buildings.splice(id,1);
                    }
                    if (b.count % 3 == 0) {
                        heroes.jobs[1].limit++;
                    }

                    break;
                }
                //Build Dungeon
                case 6: {
                    dungeons.activateDungeon();
                    if ($scope.dungeons.length < 14) {
                        dungeons.activateDungeon();
                        tutorial.completeStep(10);
                    }
                    else {
                        blueprint.activateBlueprint(4);
                        game.buildings.splice(id,1);
                    }
                    break;
                }
                //Build Bestiary
                case 7: {
                    //nothing here
                    break;
                }
                //Build Academy (Disabled)
                case 8: {
                    //nothing here
                    break;
                }
                //Build Work Hut
                case 9: {
                    $("#dialog2").dialog("open");
                    break;
                }
            }
        }
    }

    building.cost = function (b) {
        var currC = b.cost;
        c = Math.ceil(b.cost + Math.pow((b.count + 1), b.multiplier));
        game.buildings[b.id].cost = c;
        return currC;
    }

    building.getBuilding = function (id) {
        currBuild = game.buildings[id];
        if (currBuild != undefined) {
            return currBuild;
        }
        else {
            var newbuild = {
                id: id,
                count: 0
            }
            var fullBuild = Object.assign(newbuild,building.buildingList[id]);
            game.buildings.push(fullBuild);
            return fullBuild;
        }
    }

    $http.get('models/buildings.json')
        .success(function (data) {
            building.buildingList = data;
        });
        return building;
});