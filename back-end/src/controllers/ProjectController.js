const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/cors')
router.use(authMiddleware)
router.get('/', async (req, res) => {

    res.send({ ok : true})
    

});


module.exports = router;