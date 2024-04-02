const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const PetSchema = new Schema({
    type: { "type": String, "enum": ["cat", "dog"], required: true },
    name: { "type": String, minLength: 1, required: true },
    date_of_admittance: { "type": Date, required: true },
    summary: { "type": String },
    age: { "type": String, "enum": ["young", "mature", "old"] },
    domesticated: { "type": Boolean, required: true },
});

PetSchema.virtual("url").get(function () {
    return `/inventory/${this._id}`;
});

PetSchema.virtual("date_of_admittance_formatted").get(function () {
    return this.date_of_admittance ? DateTime.fromJSDate(this.date_of_admittance).toLocaleString(DateTime.DATE_MED) : "";
});

module.exports = mongoose.model("Pet", PetSchema);