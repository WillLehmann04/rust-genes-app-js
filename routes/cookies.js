const express = require('express');
const router = express.Router()

const cookieParser = require('cookie-parser')
router.use(express.urlencoded({extended:true}))

router.get("/", (request, response) => {
    response.json(request.cookies)
})

router.route("/:cookieName")
    .get((request, response) => {
        console.log(`Getting ${request.params.cookieName}`)
    })
    .post((request, response) => {
        if (request.body.consent == 'consent') {
            response.cookie('cookie-consent', true)
        }
        if (request.body.dark == 'dark' && request.cookies['cookie-consent'] == 'true'){
            if (request.cookies['dark-mode'] == 'false') {
                response.cookie('dark-mode', true)
            } else {
                response.cookie('dark-mode', false)
            }
        }
        console.log(request.cookies['cookie-consent'])
        response.redirect("/")
    })

module.exports = router;