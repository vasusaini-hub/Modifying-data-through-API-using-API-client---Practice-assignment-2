const mongoose = require('mongoose')
    mongoose.connect("mongodb+srv://gauthamram:1234@cluster0.qa74x.mongodb.net/")
    .then(()=>{
        console.log("Connected to DataBase")
    })
    .catch((err)=>{console.log(`Error:${err}`)})