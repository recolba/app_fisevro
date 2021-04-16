// imports
const express = require('express');
const app = express();
const port = 3000

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/images', express.static(__dirname + 'public/images'))

// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
        res.render('index_v2')
})



// Liten on port 3000
app.listen(port, () => console.info(`Listen on port ${port}`))

// Message for app online
console.log("Servidor no ar!")