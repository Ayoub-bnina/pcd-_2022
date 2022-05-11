const express = require('express')
const router = express.Router()
const matiereController =   require('../controllers/matiere.controller');
// Retrieve all employees
router.get('/', matiereController.findAll);
// Create a new administrateur
router.post('/', matiereController.create);
// Retrieve a single administrateur with id
router.get('/:libelleMat', matiereController.findById);
// Update a administrateur with id
router.put('/:libelleMat', matiereController.update);
// Delete a administrateur with id
router.delete('/:libelleMat', matiereController.delete);
module.exports = router