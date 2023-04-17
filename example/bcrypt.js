const bcrypt = require('bcryptjs');

async function hashPassword(password) {
    const hashedPassword = await bcrypt.hash(password, 10);

    return hashedPassword;
}

async function comparePassword(password, hashedPassword) {
    const isTheSame = await bcrypt.compare(password, hashedPassword);

    return isTheSame;
}

module.exports = { hashPassword, comparePassword }