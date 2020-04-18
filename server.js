const express  = require("express");
var bodyParser = require("body-parser");
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
app.use(express.static(__dirname+'/src'));
app.use(express.static('src'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});




app.get('/', (req, res) => {
    return res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
    next();
});



app.get('/connexion', function(req, res) {
    res.redirect('connexion');
});

app.post('/connexion', function(req, res) {
    var pseudos = req.body.pseudo;
    res.redirect('membre');
});

app.post('/inscription', function(req, res) {
    res.redirect('membre');
});

app.get('/membre', (req,res) =>{
    res.redirect('membre');
});

app.get('/posts', function(req, res) {
    res.redirect('posts');
});
app.get('/message', function(req, res) {
    res.redirect('message');
});

app.get('/archive', function(req, res) {
    res.redirect('archive');
});

app.post('/draft', function(req, res) {
    res.redirect('draft');
});

app.get('/postsPost'),function (req,res) {
    res.redirect('postsPost');
}
app.get('/newMessage'),function (req,res) {
    res.redirect('newMessage');
}

app.get('/archiveMessage'),function (req,res) {
    res.redirect('archiveMessage');
}
app.listen(port, () => console.log(`Listening on port ${port}`));