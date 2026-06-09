const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const DUMMY_USERNAME = "admin";
const DUMMY_PASSWORD = "password123";

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === DUMMY_USERNAME && password === DUMMY_PASSWORD) {
        res.send('<h1>Login Successful! Welcome to your dashboard.</h1>');
    } else {
        res.send('<h1>Invalid Credentials. <a href="/">Try again</a></h1>');
    }
});

app.listen(PORT, () => {
    console.log(`Server running smoothly on http://localhost:${PORT}`);
});