const express = require('express');
const multer = require('multer');
const { uploadImage } = require('./services/storage.services');

const app = express();
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });


app.post('/create-post', upload.single('images'), async(req, res) => {
    console.log(req.body);
    console.log(req.file);
    const imageUrl = await uploadImage(req.file);
    console.log(imageUrl);
    res.status(200).json({message: 'Post created successfully', imageUrl});
});

module.exports = app;