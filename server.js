const express = require('express');
//const request = require('request');
const path = require('path') 


const app = express();

app.use(express.static(path.join(__dirname, 'public'))) 


app.get('/', function(req, res){ 
    res.render('Demo') 
}) 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
