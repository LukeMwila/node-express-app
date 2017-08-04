const express = require('express');
const path = require('path');

//Initialize the app
const app = express();

//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Home Route
app.get('/', (req , res) => {
    res.render('index',{
        title: 'Blog Home Page'
    })
});

//Add Route
app.get('/blog/add', (req, res) => {
    res.render('add_blog', {
        title: 'Add Blog'
    })
});

//Start Server
app.listen(3000, ()=> {
    console.log('Server started on port 3000');
});