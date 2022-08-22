const mongoose = require("mongoose")

const characterSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    level: Number,
    experience: Number,
    skill: String
})

module.exports = mongoose.model("Character", characterSchema)