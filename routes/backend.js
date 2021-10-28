const router = require("express").Router();
const db = require('../db');

router.get('/notes', (req, res) => {
    db.readNotes().then((data)=>{
        res.json(data)
    }).catch(err=>res.json(err))
});

router.post('/notes', (req, res) => {
    db.writeNotes(req.body).then((data)=>{
        res.json(data)
    }).catch(err=>res.json(err))
});

// Reference the create notes. REading the notes first...
// 
module.exports = router;