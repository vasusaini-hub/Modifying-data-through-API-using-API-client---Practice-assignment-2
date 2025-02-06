const express = require('express');
const { resolve } = require('path');
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
  
  app.put('/menu/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description, price } = req.body;
  
      if (!name && !description && !price) {
        return res.status(400).json({ Message: 'Provide at least one field to update' });
      }
  
      const updatedMenu = await MenuItem.findByIdAndUpdate(
        id,
        { name, description, price },
        { new: true, runValidators: true }
      );
  
      if (!updatedMenu) {
        return res.status(404).json({ Message: 'Menu item not found' });
      }
  
      res.status(200).json({ Message: 'Menu item updated successfully', updatedMenu });
    } catch (err) {
      res.status(500).json({ Message: 'Invalid ID or error updating item', Error: err.message });
    }
  });
  
  app.delete('/menu/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deletedMenu = await MenuItem.findByIdAndDelete(id);
  
      if (!deletedMenu) {
        return res.status(404).json({ Message: 'Menu item not found' });
      }
  
      res.status(200).json({ Message: 'Menu item deleted successfully' });
    } catch (err) {
      res.status(500).json({ Message: 'Invalid ID or error deleting item', Error: err.message });
    }
  
})

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
