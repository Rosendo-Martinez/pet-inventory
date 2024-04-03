const Pet = require("../model/Pet");

const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
    const allPets = await Pet.find().sort({ date_of_admittance: -1 }).exec();

    res.render("pet_list", {
        title: "All Pets",
        pet_list: allPets
    });
});

exports.cat_list = asyncHandler(async (req, res, next) => {
    const allCats = await Pet.find({ type: "cat"}).sort({ date_of_admittance: -1 }).exec();

    res.render("pet_list", {
        title: "All Cats",
        pet_list: allCats
    })
});

exports.dog_list = asyncHandler(async (req, res, next) => {
    const allDogs = await Pet.find({ type: "dog"}).sort({ date_of_admittance: -1 }).exec();

    res.render("pet_list", {
        title: "All Dogs",
        pet_list: allDogs
    })
});

exports.pet_create_get = asyncHandler(async (req, res, next) => {
    // res.send(`Pet create get not implemented.`);
    res.render("pet_create", {
        title: "Create Pet"
    })
});

exports.pet_create_post = asyncHandler(async (req, res, next) => {
    res.send(`Pet create post not implemented.`);
});

exports.pet_details_get = asyncHandler(async (req, res, next) => {
    res.send(`Pet details get not implemented. id: ${req.params.id}`);
});

exports.pet_update_get = asyncHandler(async (req, res, next) => {
    res.send(`Pet update get not implemented. id: ${req.params.id}`);
});

exports.pet_update_post = asyncHandler(async (req, res, next) => {
    res.send(`Pet update post not implemented. id: ${req.params.id}`);
});

exports.pet_delete_get = asyncHandler(async (req, res, next) => {
    res.send(`Cat delete get not implemented. id: ${req.params.id}`);
});

exports.pet_delete_post = asyncHandler(async (req, res, next) => {
    res.send(`Cat delete post not implemented. id: ${req.params.id}`);
});
