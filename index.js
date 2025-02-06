const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose')
const menuItem = require('./model/menuModel')
require('./db')
const app = express();
const port = 3010;

app.use(express.static('static'));
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.post('/menu', async (req,res)=>{
  try{
    const{name,description,price}=req.body

    if(!name || !description || !price){
      return res.status(400).json({Message:"name and price is missing"})
    }
    const newMenu = new menuItem({name,description,price})
    await newMenu.save()
    res.status(200).json({Message:"menu item is created successfully"})
  }catch(err){
    return res.status(500).json({Message:err.Message})
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
