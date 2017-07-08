app.factory('building', function ($http, resource, game, blueprint, tutorial, items, heroes) {
    building = {};
    building.buildingList = null;

    building.upgrade = function (id) {
        if (resource.purchase(building.cost(id))) {
            var currB = getBuilding(id);
            var b = game.buildings[id];
            if(currB.single){
                game.buildings.splice(id,1);
            }
            else {
               game.buildings[id].count++;     
            }                       
            switch (id) {
                //Building Tent
                case 0: {
                    $("#dialog").dialog("open");
                    if (b.count == 5) {
                        blueprint.activateBlueprint(3);
                    }
                    tutorial.completeStep(2);
                    break;
                }
                // Building Stockpile
                case 1: {
                    getBuilding(2);
                    blueprint.activateBlueprint(2);
                    tutorial.completeStep(5);
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
                    $scope.buildings[4].enabled = false;
                    $scope.upgEnabled = false;
                    $scope.buildings[9].enabled = true;

                    if ($scope.panelNumber == 19) {
                        $scope.nextTutorial();
                    }
                    break;
                }
                //Build Alchemist
                case 5: {
                    if ($scope.buildings[5].count + 1 < $scope.potions.length) {
                        $scope.potions[$scope.buildings[5].count - 1].enabled = true;
                    }
                    else {
                        $scope.potions[$scope.buildings[5].count].enabled = true;
                        $scope.buildings[5].enabled = false;
                    }
                    if ($scope.buildings[5].count % 3 == 0) {
                        $scope.jobs[1].limit++;
                    }

                    break;
                }
                //Build Dungeon
                case 6: {
                    if ($scope.dungeons.length < 14) {
                        $scope.activateDungeon();
                        if ($scope.panelNumber == 11) {
                            $scope.nextTutorial();
                        }
                    }
                    else {

                        $scope.activateDungeon();
                        $scope.activateBlueprint(4);
                        $scope.buildings[6].enabled = false;
                    }
                    break;
                }
                //Build Bestiary
                case 7: {
                    $scope.buildings[7].enabled = false;
                }
                case 9: {
                    $("#dialog2").dialog("open");
                }
            }
        }
    }

    building.cost = function (id) {
        var b = building.buildingList[id];
        var currentB = getBuilding(id);
        c = Math.ceil(b.cost + Math.pow((currentB.count + 1), b.multiplier));
        return c;
    }

    getBuilding = function (id) {
        if (game.buildings.find(id)) {
            return game.buildings[id];
        }
        else {
            var newbuild = {
                id: id,
                count: 1
            }
            game.building.push(newbuild);
            return newbuild;
        }
    }


    $http.get('models/buildings.json')
        .success(function (data) {
            building.buildingList = data;
        });

    return building;
});