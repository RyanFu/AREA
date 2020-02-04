const mongoose = require('mongoose');

const trelloSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    trelloId: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Trello', trelloSchema);
