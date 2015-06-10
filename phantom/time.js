var system = require('system')

var lastTime = Date.now()
if (system.args[4]) {
    //remove days
    var days = parseInt(system.args[4])
    if (days) {
        lastTime = lastTime - (3600 * 1000 * 24 * days)
    }
}

var time = module.exports = function time() {
    lastTime = lastTime - (3600 * 1000 * 24)
    return lastTime
}

