const express = require('express')
const router = express.Router()
const coursController =   require('../controllers/cours.controller');
// Retrieve all employees
router.get('/', coursController.findAll);
// Create a new administrateur
router.post('/', coursController.create);
// Retrieve a single administrateur with id
router.get('/:idcours', coursController.findById);
// Update a administrateur with id
router.put('/:idcours', coursController.update);
// Delete a administrateur with id
router.delete('/:idcours', coursController.delete);
module.exports = router