const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    Studnet.find().sort({ createdAt: 1 })
        .then((result) => {
            //  res.render('index',{data:result})
            res.send(result)
        })
        .catch((err) => { console.log(err); })
});

module.exports = router;