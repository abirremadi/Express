// import express 
const express = require('express')
// associate the express methods to a variable
const app=express()
// create the variable port
const port=5000;

const d = new Date();
    const day= d.getDay();
    const hour= d.getHours();
    console.log(day,hour)
// Middelware to handle time availibility
const avaibility=(req,res,next)=> {
    
    if((day>=1 && day<=5) && (hour>=9 && hour<=17)){
        next()   
    }
    else{
        res.sendFile(__dirname + '/public/error.html')}
      
}
app.use(avaibility);

//  servir les fichiers statiques
app.use(express.static('public'));


// listen to the port 
app.listen(port,(err)=>{
    err? console.log(err): console.log ('the server is running on port 5000')
})
