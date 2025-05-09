const express = require('express');
const router = express.Router();
const itemController = require('../controllers/ItemController');

router.get('/', itemController.getItems);
router.post('/', itemController.createItem);
router.put('/:id', itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

router.post('/import', itemController.importCSV);

module.exports = router;
