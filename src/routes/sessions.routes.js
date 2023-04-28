const { Router } = require('express');

const SessionsController = require('../controllers/SessionsController');
const sessionsControler = new SessionsController();

const sessionsRouter = Router();
sessionsRouter.post("/", sessionsControler.create);

module.exports = sessionsRouter;
