const express = require('express');
const connectDB = require('./database');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());

connectDB();
const PORT = 5000;


app.use('/', express.static('public'));
app.use('/login.html', express.static('public'));
app.use('/signup.html', express.static('public'));
app.use('/dashboard.html', express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/Home.html'));
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/login.html'));
});

app.get('/signup.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/signup.html'));
});

app.get('/dashboard.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/dashboard.html'));
});


app.listen(PORT, () => {
    console.log(`Serving on port ${PORT}`);
});


app.post('/api//public/login', (req, res) => {
    const {username, password} = req.body;
    console.log('This is me', username, password);
    res.json({data: 'working'});
    for (let user of users) {
        if (username == user.username && password == user.password) {
            let token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '10d'});
            res.json({
                success: true,
                err: null,
                token
            });
            break;
        }
        else{
            res.status(401).json({
                success: false,
                token: null,
                err: 'Username or password is incorrect'
            });
        }
    }
});