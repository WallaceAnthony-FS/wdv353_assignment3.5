const mongoose = require("mongoose")

const characterSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        default: 1
    },
    experience: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("Character", characterSchema)