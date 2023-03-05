const mongoose = require('mongoose')
const contactSchema = new mongoose.Schema({
    createdBy: {
        type: String
    },

    contactName: {
        type: String
    },

    PhoneNumber: {
        type: Number
    },

    ContactImage: []

}, {
    timestamps: true
})

module.exports = mongoose.model('Contacts', contactSchema)