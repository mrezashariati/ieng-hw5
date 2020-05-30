const express = require('express')
const app = express()
const fs = require('fs');
require('dotenv').config()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", (req,res) =>{
    res.send("running...")
})
app.get("/api/forms", (req,res) => {
    forms = fs.readFileSync("./forms.json");
    forms = JSON.parse(forms);
    res.json(forms);
})
app.get("/api/forms/:formID", (req,res) => {
    forms = fs.readFileSync("./forms.json");
    forms = JSON.parse(forms);
    found = false
    for (i=0; i < forms.forms.length;i++){
        if(forms.forms[i].id === req.params.formID){
            res.json(forms.forms[i])
            found = true
            break
        }
    }
    if(!found)
        res.send("form not found")
})
app.post("/api/forms", (req,res) => {
    forms = fs.readFileSync("./forms.json")
    forms = JSON.parse(forms)
    forms.forms.push(req.body)
    fs.writeFile("./forms.json",JSON.stringify(forms), function(err){
        if(err){
            res.send(err)
        }
    })
    res.send("form added successfully")
})

app.post("/api/forms/submit",(req,res) => {
    console.log(req.body)
    res.send("submitted")
})

module.exports = app