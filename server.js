const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname + "/public")));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/public/index.html'));
})

app.listen(3000, () => {
    console.log('The app has started at port 3000');
})