const express = require("express")
const { default: mongoose } = require("mongoose")
const Character = require("../models/Character")

const router = express.Router()

// GET ALL
router.get('/', (req, res, next) => {
    Character.find({})
    .then(result => {
        res.status(200).json({
            message: "All characters",
            characters: result,
            metadata: {
                method: req.method,
                host: req.hostname
            }
        })
    })
    .catch(err => {
        console.error(err.message);
        res.status(500).json({
            error: {
                message: err.message
            }
        })
    })
})

// GET ONE
router.get('/:characterId', (req, res, next) => {
    Character.findById(req.params.characterId)
    .then(result => {
        res.status(200).json({
            message: "Character found",
            character: {
                name: result.name,
                level: result.level,
                experience: result.experience,
                skill: result.skill,
                id: result._id,
            },
            metadata: {
                method: req.method,
                host: req.hostname
            }
        })
    })
    .catch(err => {
        console.error(err.message);
        res.status(500).json({
            error: {
                message: err.message
            }
        })
    })
})

// POST
router.post('/', (req, res, next) => {
    const newCharacter = new Character({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        level: req.body.level,
        experience: req.body.experience,
        skill: req.body.skill
    })

    newCharacter.save()
    .then(result => {
        res.status(200).json({
            message: "New character created!",
            character: {
                name: result.name,
                level: result.level,
                experience: result.experience,
                skill: result.skill,
                id: result._id,
            },
            metadata: {
                method: req.method,
                host: req.hostname
            }
        })
    })
    .catch(err => {
        console.error(err.message);
        res.status(500).json({
            error: {
                message: err.message
            }
        })
    })

})

// PATCH
router.patch('/:characterId', (req, res, next) => {
    const characterId = req.params.characterId

    const updatedCharacter = {
        name: req.body.name,
        level: req.body.level,
        experience: req.body.experience,
        skill: req.body.skill
    }

    Character.findByIdAndUpdate(characterId, updatedCharacter)
    .then(result => {
        res.status(200).json({
            message: "Character updated",
            character: {
                name: result.name,
                level: result.level,
                experience: result.experience,
                skill: result.skill,
                id: result._id,
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

// DELETE
router.delete('/:characterId', (req, res, next) => {
    Character.findByIdAndDelete(req.params.characterId)
    .then(result => {
        res.status(200).json({
            message: "Character removed",
            character: {
                name: result.name,
                level: result.level,
                experience: result.experience,
                skill: result.skill,
                id: result._id,
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

module.exports = router