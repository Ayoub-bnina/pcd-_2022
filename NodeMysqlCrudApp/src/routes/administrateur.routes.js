const express = require('express')
const router = express.Router()
const administrateurController =   require('../controllers/administrateur.controller');
// Retrieve all employees
router.get('/', administrateurController.findAll);
// Create a new administrateur
router.post('/', administrateurController.create);
// Retrieve a single administrateur with id
router.get('/:id', administrateurController.findById);
// Update a administrateur with id
router.put('/:id', administrateurController.update);
// Delete a administrateur with id
router.delete('/:id', administrateurController.delete);

router.post('/login', administrateurController.login);
module.exports = router