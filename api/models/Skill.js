const mongoose = require("mongoose")

const skillSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        default: 1
    },
    character: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: "Character",
        required: true
    }
})

module.exports = mongoose.model("Skill", skillSchema)