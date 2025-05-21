const fs = require('fs');
const path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
    await new Promise((res) => setTimeout(res, 800));
    next();
});

server.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'));
        const { users = [] } = db;

        const user = users.find(
            (u) => u.username === username && u.password === password
        );

        if (user) return res.json(user);
        return res.status(403).json({ message: 'User not found' });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: e.message });
    }
});

server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }
    next();
});

server.use(router);

server.listen(8000, () => {
    console.log('✅ Mock API running on http://localhost:8000');
});
