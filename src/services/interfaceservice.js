app.factory('ui', function ($http) {
    ui = {};
    ui.tabs = {}
    ui.tabs.town = true;
    ui.tabs.hero = false;
    ui.tabs.production = false;
    ui.tabs.professions = false;
    ui.tabs.bestiary = false;
    ui.tabs.options = true;
    return ui;
});