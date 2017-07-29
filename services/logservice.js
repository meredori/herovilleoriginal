app.factory('logging', function ($http) {
    logging = {};
    logging.debug = false;
    logging.debugLog = function (value) {
        if (logging.debugging) {
            console.log(value);
        }
    }
    return logging;
});