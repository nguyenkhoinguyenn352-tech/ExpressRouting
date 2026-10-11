import express from 'express';

const app = express();
app.use(express.json());

const userItems = [
    {
        user_id: 3609,
        name: 'John Doe',
        username: 'johndoe',
        email: 'john@metropolia.fi',
        role: 'user',
        password: 'password',
    }
];

// Cats routes
app.get('/api/v1/cats', (req, res) => {
    res.json({ cat_id: 1, name: 'Whiskers' });
});

app.get('/api/v1/cats/:id', (req, res) => {
    res.json({ cat_id: req.params.id, name: 'Whiskers' });
});

app.post('/api/v1/cats', (req, res) => {
    res.status(201).json({ message: 'Cat added', data: req.body });
});

app.put('/api/v1/cats/:id', (req, res) => {
    res.json({ message: 'Cat item updated.' });
});

app.delete('/api/v1/cats/:id', (req, res) => {
    res.json({ message: 'Cat item deleted.' });
});

// Users routes
app.get('/api/v1/users', (req, res) => {
    res.json(userItems);
});

app.get('/api/v1/users/:id', (req, res) => {
    const user = userItems.find(u => u.user_id == req.params.id);
    user ? res.json(user) : res.sendStatus(404);
});

app.post('/api/v1/users', (req, res) => {
    userItems.push(req.body);
    res.status(201).json({ message: 'User added', data: req.body });
});

app.put('/api/v1/users/:id', (req, res) => {
    res.json({ message: 'User item updated.' });
});

app.delete('/api/v1/users/:id', (req, res) => {
    res.json({ message: 'User item deleted.' });
});

export default app;