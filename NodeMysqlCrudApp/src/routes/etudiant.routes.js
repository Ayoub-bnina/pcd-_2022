const express = require('express')
const router = express.Router()
const etudiantController =   require('../controllers/etudiant.controller');
// Retrieve all employees
router.get('/', etudiantController.findAll);
// Create a new employee
router.post('/', etudiantController.create);
// Retrieve a single employee with id
router.get('/:id', etudiantController.findById);
// Update a employee with id
router.put('/:id', etudiantController.update);
// Delete a employee with id
router.delete('/:id', etudiantController.delete);


router.post('/login', etudiantController.login);


module.exports = router