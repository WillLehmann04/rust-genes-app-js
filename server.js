var express = require('express');
const cookieParser = require('cookie-parser')
var app = express();

app.set('view engine', 'ejs')

app.use('/favicon.ico', express.static('images/border.png'));
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.render("pages/home", {title: "Rust Genetics - Calculator", consentStatus:request.cookies['cookie-consent']})
})

const cookieRoute = require("./routes/cookies");
app.use("/cookies", cookieRoute)

app.listen(8989)