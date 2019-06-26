app.factory('dungeons', function ($http, logging,ui) {
    dungeons = {};
    dungeons.dungeons = [];
    dungeons.dungeonNames = [];
    dungeons.monsterList = [];
    dungeons.bosses = [];
    dungeons.monsters = [];
    dungeons.initialize = function () {
        dungeons.activateDungeon();
        ui.tabs.hero = true;
    }

    dungeons.activateDungeon = function () {
        dungeons.dungeons[dungeons.dungeons.length] = {
            id: dungeons.dungeons.length,
            name: dungeons.dungeonName(),
            level: dungeons.dungeons.length + 1,
            steps: 15 * (dungeons.dungeons.length + 1),
            encounterRate: (15 + Math.floor(Math.random() * 6)),
            encounterLevel: dungeons.dungeons.length + 2,
            bossID: dungeons.dungeons.length,
            enabled: true,
            reward: ("Gold;g;" + (dungeons.dungeons.length + 1))
        }
        dungeons.createMonster(dungeons.dungeons.length);
        dungeons.createBoss(dungeons.dungeons.length - 1);

    }

    dungeons.dungeonName = function () {
        var dList = dungeons.dungeonNames.dungeons.slice();
        for (i = 0; i < dungeons.dungeons.length; i++) {
            for (j = 0; j < dList.length; j++) {
                if (dList[j] == dungeons.dungeons[i].name) {
                    dList.splice(j, 1);
                }
            }
        }
        random = Math.floor(Math.random() * dList.length);
        name = dList[random];
        return name
    }

    dungeons.createMonster = function (level) {

        monstersist = dungeons.monsterList.monsters;
        for (i = 0; i < dungeons.monsters.length; i++) {
            for (j = 0; j < monstersist.length; j++) {
                if (monstersist[j].name == dungeons.monsters[i].name) {
                    monstersist.splice(j, 1);
                }
            }
        }
        for (i = 0; i < 3; i++) {
            random = Math.floor(Math.random() * monstersist.length);
            randomMax = Math.ceil(Math.random() * (level * level + 1));
            randomMin = Math.ceil(Math.random() * (randomMax));
            averagedmg = Math.ceil((randomMax + randomMin) / 2);
            mobHealth = Math.floor(((5 * level) / averagedmg) * (level * level));
            dungeons.monsters[dungeons.monsters.length] = {
                id: dungeons.monsters.length,
                name: monstersist[random].name,
                value: level,
                minDamage: randomMin,
                maxDamage: randomMax,
                health: mobHealth,
                low: "Junk;j;" + (level * 3),
                high: "Gold;g;" + level
            }
            logging.debugLog("Created " + dungeons.monsters[(dungeons.monsters.length - 1)].name);
            monstersist.splice(random, 1);
        }

    }

    dungeons.createBoss = function (level) {
        level += 2;
        monstersist = dungeons.monsterList.monsters;
        for (i = 0; i < dungeons.bosses.length; i++) {
            for (j = 0; j < monstersist.length; j++) {
                if (monstersist[j].name == dungeons.bosses[i].name) {
                    monstersist.splice(j, 1);
                }
            }
        }

        random = Math.floor(Math.random() * monstersist.length);
        randomMax = Math.ceil(Math.random() * (level * level + 1));
        randomMin = Math.ceil(Math.random() * (randomMax));
        averagedmg = Math.ceil((randomMax + randomMin) / 2);
        mobHealth = Math.floor(((5 * level) / averagedmg) * (level * level));
        dungeons.bosses[dungeons.bosses.length] = {
            id: dungeons.bosses.length,
            name: monstersist[random].name,
            value: level,
            minDamage: randomMin,
            maxDamage: randomMax,
            health: mobHealth,
            low: "Junk;j;" + (level * 3),
            high: "Gold;g;" + level
        }
        logging.debugLog("Created " + dungeons.bosses[(dungeons.bosses.length - 1)].name);
        monstersist.splice(random, 1);

    }
    $http.get('Models/dungeons.json')
        .success(function (data) {
            dungeons.dungeonNames = data;
        });

            $http.get('Models/monsterList.json')
        .success(function (data) {
            dungeons.monsterList = data;
        });
    return dungeons;
});