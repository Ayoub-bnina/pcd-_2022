const express = require('express')
const router = express.Router()
const enseignantController =   require('../controllers/enseignant.controller');
// Retrieve all employees
router.get('/', enseignantController.findAll);
// Create a new employee
router.post('/', enseignantController.create);
// Retrieve a single employee with id
router.get('/:id', enseignantController.findById);
// Update a employee with id
router.put('/:id', enseignantController.update);
// Delete a employee with id
router.delete('/:id', enseignantController.delete);

router.post('/login', enseignantController.login);

module.exports = router