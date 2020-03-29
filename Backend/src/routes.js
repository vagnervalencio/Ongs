const express = require('express');
const routes = express.Router();

const OngsController = require('./controller/OngsController');
const IncidentsController = require('./controller/IncidentsController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

routes.post('/sessions', SessionController.create);


routes.post('/ongs', OngsController.create);
routes.get('/ongs', OngsController.index);   

routes.get('/profile', ProfileController.index);

routes.get('/incidents' , IncidentsController.index);
routes.post('/incidents' , IncidentsController.create);
routes.delete('/incidents/:id' , IncidentsController.delete)



module.exports = routes
