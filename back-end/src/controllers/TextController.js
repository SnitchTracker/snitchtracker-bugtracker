const express = require ('express');
const router = express.Router();
// MODEL
const Text = require('../models/Text');

// CREATE
router.post('/', async (req, res)=>{
    let note = req.body.text;
    let text = new Task({
        text: note
    })
    res.json(await text.save())
});

// READ
router.get('/', (req,res)=>{
  Text.find().then(note => res.json(note));

});

// UPDATE
router.put('/:id', async (req,res) =>{
    let id = req.params.id;
    let note = req.body.text;
    let status = req.body.status;

    let note = await Text.updateOne({_id: id},{
       note: text,
        status: status
    })
    res.json(note);
})

// DELETE
router.delete('/:id', async (req, res) =>{
    let id = req.params.id;

    let note = await Title.deleteOne({_id:id});
    res.json(note)
} )



module.exports=router;