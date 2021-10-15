import express from 'express'
import { HomePageController } from '../controllers/HomeController'
let router = express.Router()
let initWebRoutes = (app) => {
    router.get('/', HomePageController.getHomePage)

    // Creates the endpoint for our webhook 
    app.post('/webhook', HomePageController.postWebhook);
    // Adds support for GET requests to our webhook
    app.get('/webhook', HomePageController.getWebhook)
    return app.use('/', router)
}
module.exports = initWebRoutes