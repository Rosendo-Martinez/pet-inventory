const Pet = require("../model/Pet");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

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
    res.render("pet_form", {
        title: "Create Pet"
    })
});

exports.pet_create_post = [
    body('name')
        .trim()
        .isLength({ min: 1 })
        .escape()
        .withMessage("Name must not be empty.")
        .matches(/^[A-Za-z\s]+$/)
        .withMessage('Name must be alphabetic.'),
    body('type')
        .isIn(['dog', 'cat'])
        .withMessage('Type must be dog or cat.'),
    body('date_of_admittance')
        .isISO8601()
        .toDate(),
    body('summary')
        .trim()
        .isLength({ min: 1})
        .escape()
        .withMessage("Summary must not be empty."),
    body('age')
        .isIn(['young', 'mature', 'old'])
        .withMessage('Age must be young, mature, or old.'),
    body('domesticated')
        .isBoolean()
        .withMessage('Must be true or false.'),
    
    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        const pet = new Pet({
            type: req.body.type,
            name: req.body.name,
            date_of_admittance: req.body.date_of_admittance,
            age: req.body.age,
            domesticated: req.body.domesticated,
            summary: req.body.summary
        });

        if (!errors.isEmpty()) {
            res.render("pet_form", {
                title: "Create Pet",
                pet: pet,
                error_list: errors.array(),
            });
            return;
        } else {
            await pet.save();

            res.redirect(pet.url);
        }
    }
)];

exports.pet_details_get = asyncHandler(async (req, res, next) => {
    const pet = await Pet.findById(req.params.id).exec();

    if (pet === null) {
        // No results.
        const err = new Error("Pet not found");
        err.status = 404;
        return next(err);
    };

    res.render('pet_details', {
        title: `Pet Details: ${pet.name}`,
        pet: pet,
    })
});

exports.pet_update_get = asyncHandler(async (req, res, next) => {
    const pet = await Pet.findById(req.params.id).exec();

    if (pet === null) {
        // No results.
        const err = new Error("Pet not found");
        err.status = 404;
        return next(err);
    };

    res.render('pet_form', {
        title: "Update Pet",
        pet: pet
    });
});

exports.pet_update_post = [
    body('name')
        .trim()
        .isLength({ min: 1 })
        .escape()
        .withMessage("Name must not be empty.")
        .matches(/^[A-Za-z\s]+$/)
        .withMessage('Name must be alphabetic.'),
    body('type')
        .isIn(['dog', 'cat'])
        .withMessage('Type must be dog or cat.'),
    body('date_of_admittance')
        .isISO8601()
        .toDate(),
    body('summary')
        .trim()
        .isLength({ min: 1})
        .escape()
        .withMessage("Summary must not be empty."),
    body('age')
        .isIn(['young', 'mature', 'old'])
        .withMessage('Age must be young, mature, or old.'),
    body('domesticated')
        .isBoolean()
        .withMessage('Must be true or false.'),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        const pet = new Pet({
            name: req.body.name,
            type: req.body.type,
            date_of_admittance: req.body.date_of_admittance,
            summary: req.body.summary,
            age: req.body.age,
            domesticated: req.body.domesticated,
            _id: req.params.id
        });

        if (!errors.isEmpty()) {
            res.render("pet_form", {
                title: "Update Pet",
                pet: pet,
                error_list: errors.array(),
            });
            return;
        } else {
            const updatedPet = await Pet.findByIdAndUpdate(req.params.id, pet);

            res.redirect(updatedPet.url);
        }
    }
)];

exports.pet_delete_get = asyncHandler(async (req, res, next) => {
    const pet = await Pet.findById(req.params.id).exec();

    if (pet === null) {
        // No results.
        const err = new Error("Pet not found");
        err.status = 404;
        return next(err);
    };

    res.render('pet_delete.pug', {
        title: 'Delete Pet',
        pet: pet,
    })
});

exports.pet_delete_post = asyncHandler(async (req, res, next) => {
    await Pet.findByIdAndDelete(req.body.petId);
    res.redirect('/inventory');
});
