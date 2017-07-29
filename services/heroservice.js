app.factory('heroes', function ($http,game,items) {
    heroes = {};
    heroes.jobs = [];
    heroes.heroClass = [];


    heroes.addHero = function (heroName) {
        var hero = game.heroes;
        hero[hero.length] =
            {
                id: hero.length,
                name: heroName,
                currHealth: 100,
                health: 100,
                level: 1,
                experience: 0,
                next: 50,
                equip: {
                    weapon: $.extend(true, {}, items.weapons[0]),
                    potions: [
                        {
                            id: 0,
                            name: "Regeneration",
                            count: 0,
                        },
                        {
                            id: 1,
                            name: "Power",
                            count: 0,
                        },
                        {
                            id: 2,
                            name: "Health",
                            count: 0
                        },
                        {
                            id: 3,
                            name: "Good Health",
                            count: 0
                        },
                        {
                            id: 4,
                            name: "Great Health",
                            count: 0
                        }
                    ],
                    gold: 0,
                    scrap: 0,
                },
                location: 'Home',
                progress: 0,
                dungeon: 0,
                clearCount: 0,
                working: false,
                job: heroes.jobs[0],
                academy: heroes.heroClass[2],
                party: false
            }
    }



    return heroes;
});