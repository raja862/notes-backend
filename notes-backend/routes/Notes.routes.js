
import express from "express"
import Model from "../models/Notes.model.js"
const router = express.Router();


router.get('/notes', (req, res) => {
    try{
        Model.find((err, data) => {
            if(err){
                return res.status(400).json({message: 'Error while retrieving notes. Please check the data'})
            }

            res.status(200).json({message:"notes created", data})
        })
    }catch(error){
        res.status(500).json({
            message: 'Internal Server Error'
        })
    }
});

router.get('/notes/:NotesID', (req, res) => {
    try{
        Model.findOne({_id: req.params.NotesID}, (err, data) => {
            if(err){
                return res.status(400).json({message: 'Error while retrieving an employee. Please check the data'})
            }

            res.status(200).send({data});
        })
    }catch(error){
        res.status(500).json({
            message: 'Internal Server Error'
        })
    }
});

router.post('/notes', async (req, res) => {
    try{
        const payload = req.body;

        const newNotes = new Model(payload);

        await newNotes.save((err, data)=> {
            if(err){
                return res.send(400).json({message: 'Error while adding new Notes. Please check the data'});
            }

            res.status(201).send({NotesId: data._id, message: "Notes has been added successfully." })
        })

    }catch(error){
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
});

router.put('/notes/:NotesID', (req, res) => {
    try{
        Model.findByIdAndUpdate({_id: req.params.NotesID}, {$set: req.body}, (err, data) =>{
            if(err){
                return res.status(400).json({message: 'Error while updating an existing user. Please check the data'})
            }

            res.status(201).json({NotesId: data._id, message: "Notes details have been updated."})
        })

    }catch(error){
        res.status(500).send({
            message: "Internal Server Error"
        })
    }
});

router.delete('/notes/:NotesID', (req, res) => {
    try{
        Model.deleteOne({_id: req.params.NotesID}, (err, data) => {
            if(err){
                return res.status(400).json('Error while deleting an Notes. Please check the data');
            }

            res.status(200).json({message : `Notes with id ${req.params.empID} has been deleted.`})
        })
    }catch(error){
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
});



export default router