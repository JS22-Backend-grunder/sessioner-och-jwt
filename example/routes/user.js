const { Router } = require('express');
const router = Router();
const { hashPassword, comparePassword } = require('../bcrypt');
const { saveUser, findUser } = require('../model/user');
const jwt = require('jsonwebtoken');

router.post('/login', async (request, response) => {
    const { username, password } = request.body;

    const user = await findUser(username);
    console.log(user);
    const correctPassword = await comparePassword(password, user.password);

    result = {
        success: false
    }

    if (correctPassword) {
    // Vår token blir krypterad med användarens id som kopplar vår token till användaren
        const token = jwt.sign({ id: user.id }, 'a1b1c1', {
            expiresIn: 600 // Går ut om 10 min
        });

        result.success = true;
        result.token = token;
    } else {
        result.message = 'Ej korrekta inloggningsuppgifter';
    }

    response.json(result);
});

router.post('/signup', async (request, response) => {
    const { username, password } = request.body;

    const pass = await hashPassword(password);

    saveUser(username, pass);

    response.json({ success: true });
});

router.get('/verify', (request, response) => {
    const token = request.headers.authorization.replace('Bearer ', '');

    try {
        const data = jwt.verify(token, 'a1b1c1');

        console.log(data);

        response.json({ success: true });
    } catch (error) {
        response.json({ success: false, error: 'Invalid token' });
    }
});

module.exports = router;