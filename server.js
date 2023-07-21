const app = require("express")();

app.get('/', (request, response) => {
    console.log("yo");
    response.send("hi")
})

app.listen(8989)