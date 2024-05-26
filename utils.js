const { loggedInUsername } = require('./bot');

function getLoggedInUsername() {
    return loggedInUsername;
}

module.exports = { getLoggedInUsername };
