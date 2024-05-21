const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/:fileType', (req, res) => {
    const fileType = req.params.fileType;
    const filePath = path.join(__dirname, `test.${fileType}`);
    res.sendFile(filePath);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
