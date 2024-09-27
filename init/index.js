const mongoose = require("mongoose");
const initData = require("./data.js"); 
const Listing = require("../models/listing.js");

main().then(() => {
    console.log("Connected to DB");
}).catch(err => console.error(err)); // Corrected to console.error

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

const initDB = async () => {
    try {
        await Listing.deleteMany({});
        await Listing.insertMany(initData.data);
        console.log("Data was initialized successfully");
    } catch (err) {
        console.error("Error initializing data:", err); // Corrected to console.error
    }
};

initDB();
