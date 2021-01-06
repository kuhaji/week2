'use strict';
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require("multer");
const upload = multer({dest: './uploads/'});


router.get('/', userController.user_list_get);

router.get('./routes/userRoutes.js', userController.user_get,(req,res) => {
    res.send(req.params.id)
});

router.post('/', userController.user_get);

router.put('/', (req, res) => {
    res.send('With this endpoint you can edit users');
});

router.delete('/', (req, res) => {
    res.send('With this endpoint you can delete users');
});


module.exports = router;
