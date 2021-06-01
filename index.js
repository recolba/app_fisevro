// imports
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/images', express.static(__dirname + 'public/images'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
        res.render('index')
})

app.get('/index_user', (req, res) => {
        res.render('index_user')
})

app.get('/index_adm', (req, res) => {
        res.render('index_adm')
})

app.get('/index_profile', (req, res) => {
        res.render('index_profile')
})

require('./controllers/authController')(app);
require('./controllers/userController')(app);
require('./routes/routesFisevro')(app);

// Liten on port 3000
app.listen(port, () => console.info(`Listen on port ${port}`))

// Message for app online
console.log("Server is UP!")
