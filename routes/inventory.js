var express = require('express');
var router = express.Router();

const pets_controller = require("../controller/PetController");

router.get('/', pets_controller.index);

router.get('/cats', pets_controller.cat_list);

router.get('/dogs', pets_controller.dog_list);

router.get('/create', pets_controller.pet_create_get);

router.post('/create', pets_controller.pet_create_post);

router.get('/:id', pets_controller.pet_details_get);

router.get('/:id/update', pets_controller.pet_update_get);

router.post('/:id/update', pets_controller.pet_update_post);

router.get('/:id/delete', pets_controller.pet_delete_get);

router.post('/:id/delete', pets_controller.pet_delete_post);

module.exports = router;