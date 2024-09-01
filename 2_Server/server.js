const express = require("express");
// const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, function () {
    console.log("Server listening at port 3000");
})

app.get('/', function (req, res) {
    res.json(
        {
            Name: "Danish Hussain Dar",
            Roll: 2106112,
            message: 'Hello, this is a JSON response',
            success: true,
            data: {
                id: 1,
                name: 'Sample Item',
                details: 'This is a sample JSON response using Express'
            }
        }
    );
    console.log(req);
})
app.post('/', function (req, res) {
    console.log(req.body);
    res.send("Successfully Received");
})