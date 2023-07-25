var express = require('express');
var app = express();

app.set('view engine', 'ejs')

app.use('/favicon.ico', express.static('images/border.png'));

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.render("pages/home", {title: "Rust Genetics - Calculator"})
})

app.listen(8989)