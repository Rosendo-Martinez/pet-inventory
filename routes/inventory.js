var express = require('express');
var router = express.Router();

const pets_controller = require("../controller/PetController");

router.get('/', pets_controller.index);

router.get('/cats', pets_controller.cat_list);

router.get('/dogs', pets_controller.dog_list);

router.get('/cats/create', pets_controller.cat_create_get);

router.post('/cats/create', pets_controller.cat_create_post);

router.get('/dogs/create', pets_controller.dog_create_get);

router.post('/dogs/create', pets_controller.dog_create_post);

router.get('/cats/:id', pets_controller.cat_details_get);

router.get('/dogs/:id', pets_controller.dog_details_get);

router.get('/cats/:id/update', pets_controller.cat_update_get);

router.post('/cats/:id/update', pets_controller.cat_update_post);

router.get('/dogs/:id/update', pets_controller.dog_update_get);

router.post('/dogs/:id/update', pets_controller.dog_update_post);

router.get('/cats/:id/delete', pets_controller.cat_delete_get);

router.post('/cats/:id/delete', pets_controller.cat_delete_post);

router.get('/dogs/:id/delete', pets_controller.dog_delete_get);

router.post('/dogs/:id/delete', pets_controller.dog_delete_post);

module.exports = router;