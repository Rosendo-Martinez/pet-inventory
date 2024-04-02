const Pet = require("../model/Pets");

const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
    res.send(`Index not implemented (list of cats and dogs).`);
});

exports.cat_list = asyncHandler(async (req, res, next) => {
    res.send(`Cat list not implemented.`);
});

exports.dog_list = asyncHandler(async (req, res, next) => {
    res.send(`Dog list not implemented.`);
});

exports.cat_create_get = asyncHandler(async (req, res, next) => {
    res.send(`Cat create get not implemented.`);
});

exports.cat_create_post = asyncHandler(async (req, res, next) => {
    res.send(`Cat create post not implemented.`);
});

exports.dog_create_get = asyncHandler(async (req, res, next) => {
    res.send(`Dog create get not implemented.`);
});

exports.dog_create_post = asyncHandler(async (req, res, next) => {
    res.send(`Dog create post not implemented.`);
});

exports.cat_details_get = asyncHandler(async (req, res, next) => {
    res.send(`Cat details get not implemented. id: ${req.params.id}`);
});

exports.dog_details_get = asyncHandler(async (req, res, next) => {
    res.send(`Dog details get not implemented. id: ${req.params.id}`);
});

exports.cat_update_get = asyncHandler(async (req, res, next) => {
    res.send(`Cat update get not implemented. id: ${req.params.id}`);
});

exports.cat_update_post = asyncHandler(async (req, res, next) => {
    res.send(`Cat update post not implemented. id: ${req.params.id}`);
});

exports.dog_update_get = asyncHandler(async (req, res, next) => {
    res.send(`Dog update get not implemented. id: ${req.params.id}`);
});

exports.dog_update_post = asyncHandler(async (req, res, next) => {
    res.send(`Dog update post not implemented. id: ${req.params.id}`);
});

exports.cat_delete_get = asyncHandler(async (req, res, next) => {
    res.send(`Cat delete get not implemented. id: ${req.params.id}`);
});

exports.cat_delete_post = asyncHandler(async (req, res, next) => {
    res.send(`Cat delete post not implemented. id: ${req.params.id}`);
});

exports.dog_delete_get = asyncHandler(async (req, res, next) => {
    res.send(`Dog delete get not implemented. id: ${req.params.id}`);
});

exports.dog_delete_post = asyncHandler(async (req, res, next) => {
    res.send(`Dog delete post not implemented. id: ${req.params.id}`);
});
