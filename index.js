const express = require('express');
const crypto = require('crypto');
const multer = require('multer');

const app = express();
const port = 3000;

// Multer configuration to handle file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route to handle file uploads and return SHA256 hash
app.post('/hash', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    const fileBuffer = req.file.buffer;

    const hash = crypto.createHash('sha256');
    hash.update(fileBuffer);

    const sha256Hash = hash.digest('hex');

    res.json({ hash: sha256Hash });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});