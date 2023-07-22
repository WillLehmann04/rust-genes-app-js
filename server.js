var express = require('express');
var app = express();

app.set('view engine', 'ejs')

app.use('/favicon.ico', express.static('images/border.png'));

app.get('/', (request, response) => {
    console.log("yo");
    response.render("pages/home", {title: "Rust Genetics - Calculator"})
})

app.listen(8989)