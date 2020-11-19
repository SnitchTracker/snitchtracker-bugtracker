const express = require ('express');
const router = express.Router();
// MODEL
const Title = require('../models/Title');

// CREATE
router.post('/', async (req, res)=>{
    let title = req.body.subject;
    let subject = new Task({
        subject: title
    })
    res.json(await subject.save())
});

// READ
router.get('/', (req,res)=>{
  Title.find().then(subject => res.json(subject));

});

// UPDATE
router.put('/:id', async (req,res) =>{
    let id = req.params.id;
    let subject = req.body.title;
    let status = req.body.status;

    let subject = await Title.updateOne({_id: id},{
       subject: title,
        status: status
    })
    res.json(subject);
})

// DELETE
router.delete('/:id', async (req, res) =>{
    let id = req.params.id;

    let subject = await Task.deleteOne({_id:id});
    res.json(subject)
} )



module.exports=router;