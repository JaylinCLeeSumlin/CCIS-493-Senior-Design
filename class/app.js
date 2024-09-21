const express = require('express')
const db = require("./dbcon")
const app = express()

app.get('/', (req, res)=> {
    res.send("<h1> Welcome to CIS 493 </h1>")
})

app.get("/search", (req, res)=>{
    try{
        const result = await db.query('select * from FROM users;')
        res.json(result.rows)
    }catch (err){
        console.log(err)
        res.status(500).send("Internal Error")
    }
})
app.listen(3000)