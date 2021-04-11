const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const URI = 'mongodb+srv://footsteps-admin:comp324@cluster0.oz2z1.mongodb.net/locationsDB';

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/app')); //allows us to look at all of the files that are linked to the index page


mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });


//Create Data schema
const locationSchema = {
    name: String,
    description: String,
    address: String,
    category: String,
}

const Location = mongoose.model("Location", locationSchema);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {
    let newLocation = new Location({
        name: req.body.name,
        description: req.body.description,
        address: req.body.address,
        category: req.body.category,
    })

    newLocation.save();
    res.redirect('/');
})


app.listen(3000, ()=> {
    console.log("Server is running on port 3000;")
})


