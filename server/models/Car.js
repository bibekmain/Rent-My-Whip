const mongoose = require('mongoose');
const { Schema } = mongoose;

const carSchema = new Schema({
    //the price of the car
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
    description: {
        type: string
    }
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;
