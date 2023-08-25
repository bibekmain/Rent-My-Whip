const mongoose = require('mongoose');
const { Schema } = mongoose;
const carSchema = new Schema({
    //the price of the car
    carId: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    //the make of the car
    make: {
        type: String,
        required: true,
    },
    //the model of the car
    model: {
        type: String,
        required: true
    },
    //the year the car was manufactured
    year: {
        type: Number,
        required: true
    },
    //number of doors
    doors: {
        type: Number
    },
    //Air conditioning
    ac: {
        type: Boolean
    },
    //manual or automatic
    transmission: {
        type: String
    },
    //gas or diesels
    fuel: {
        type: String
    }
});
const Car = mongoose.model('Car', carSchema);
module.exports = Car;