const express = require('express');
const app = express();
const PORT = 3000 || 8000;

app.get("/user/:id", (req, res) =>{
   const userId = req.params.id; //dot notation
   res.send(`User id is ${userId}`);
});


app.get("/search", (req,res) =>{
    const query = req.query.q
    res.send('search query is: ${query}' );
});


app.listen(PORT, ()=>{
    console.log('connect to port ${PORT}');
});