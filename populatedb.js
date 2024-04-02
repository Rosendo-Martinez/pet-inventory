#! /usr/bin/env node

console.log('This script populates some pets to your database. Specified database as argument - e.g.: node populatedb "DB_URL"');

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Pet = require("./model/Pet");

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createPets();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

async function petCreate(type, name, date_of_admittance, summary, age, domesticated) {
  const pet = new Pet({ type:type, name:name, date_of_admittance:date_of_admittance, summary:summary, age:age, domesticated:domesticated });
  await pet.save();
  console.log(`Added pet: ${pet.name}`);
}

async function createPets() {
  console.log("Adding Pets");
  await Promise.all([
    petCreate("cat", "snu", "2023-06-12", "A orange cat.", "mature", true),
    petCreate("cat", "blu", "2024-01-03", "A white haied blue nose cat.", "young", false),
    petCreate("cat", "razor", "2024-02-22", "A fiesty little shit.", "young", false),
    petCreate("dog", "Suezy", "2021-12-27", "A playful golden retriever.", "mature", true),
    petCreate("dog", "Rot", "2020-03-03", "A lazy senior grey pitbull.", "old", true)
  ]);
}
