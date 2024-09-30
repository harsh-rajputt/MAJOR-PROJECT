const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
       type: String,
       required: true,
       trim: true // Removes extra spaces before and after the title
    },
    description: {
        type: String,
        trim: true
    },
    image: {
        filename: {
          type: String,
          default: "defaultfilename"
        },
        url: {
          type: String,
          default: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?q=80&w=875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be a positive number']
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
