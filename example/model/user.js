const nedb = require('nedb-promise');
const database = new nedb({ filename: 'users.db', autoload: true });
const uuid = require('uuid-random');

function saveUser(username, password) {
    database.insert({ username: username, password: password, id: uuid() });
}

async function findUser(username) {
    return await database.findOne({ username: username });
}

module.exports = { saveUser, findUser }