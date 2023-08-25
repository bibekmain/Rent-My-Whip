const mongoose = require('mongoose');
const { Schema } = mongoose;

const carSchema = new Schema({
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true
    },
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
