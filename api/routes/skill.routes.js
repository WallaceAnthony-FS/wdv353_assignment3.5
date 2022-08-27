const express = require("express")
const { default: mongoose } = require("mongoose")
const Skill = require("../models/Skill")

const router = express.Router()


// GET ALL
router.get("/", (req, res, next) => {

})

// GET ONE
router.get("/:skillId", (req, res, next) => {
    
})

// POST - create one
router.post("/", (req, res, next) => {
    Skill.find({ name: req.body.name, character: req.body.characterId })
    .exec()
    .then((skills) => {
        if(skills.length >= 1){
            return res.status(400).json({
                message: "That user already contains this skill."
            })
        }

        const newSkill = new Skill({
            _id: mongoose.Types.ObjectId(),
            name: req.body.name,
            character: req.body.characterId
        })

        newSkill.save()
        .then(skill => {
            res.status(200).json({
                message: `New skill: ${skill.name} created`,
                skill: {
                    name: skill.name,
                    level: skill.level,
                    character: skill.character.name,
                    characterId: skill.character._id
                },
                metadata: {
                    method: req.method,
                    host: req.hostname
                }
            })
        })
        .catch(err => {
            res.status(500).json({
                error: {
                    message: err.message
                }
            })
        })
    })
})

// PATCH - update one
router.patch("/:skillId", (req, res, next) => {

})

// DELETE - remove one
router.delete("/:skillId", (req, res, next) => {

})

module.exports = router