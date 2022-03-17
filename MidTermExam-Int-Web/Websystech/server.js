const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

//Link to database and acct
mongoose.connect("mongodb+srv://john:john@primarycluster.woj20.mongodb.net/midtermExamdatabase")

//initializes <variable_name> as to what <data_type>
const streamsSchema = {
    input : String,
}
//Note
const MidtermExam = mongoose.model("Websystech", streamsSchema);

//fetches the data from the html file
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req, res) {
    let MidtermExamResult = new MidtermExam({
        input : req.body.input,
    });

//Save to Mongodb and refreshes page
MidtermExamResult.save();
    res.redirect('/');
})

//Console Display server Status
app.listen(3000, function (req, res) {
    console.log("server is running on 3000");
})