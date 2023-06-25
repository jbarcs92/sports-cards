const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    year: {
        type: Number
    },
    manufacturer: {
        type: String,
        enum: ['Topps', 'Upper Deck', 'Panini', 'Bowman', 'Fleer', 'Prizm']
    },
    cardNo: {
        type: Number
    },
    sport: {
        type: String,
        enum: ['Football', 'Baseball', 'Basketball', 'Hockey']
    },
    rookie: {
        type: Boolean
    },
    gradingCo: {
        type: String,
        enum: ['PSA', 'BGS', 'SGC']
    },
    grade: {
        type: Number,
        min: 1,
        max: 10
    },
    quantity: {
        type: Number,
        default: 1,
        min: 1
    },
    price: {
        type: String
    },
    team: {
        type: String,
    },
    photoFrontView: {
        type: String
    },
    photoBackView: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Card', cardSchema);