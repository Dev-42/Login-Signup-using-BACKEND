const express = require('express')

const {connection} = require('./db/conn')

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())

app.listen(port , async() => {
    try{
        await connection
        console.log("Connected to DB successfully")
    }catch(e){
        console.log(e)
        console.log("Connection unsuccessfull")
    }
    console.log(`Server is running at port number ${port}`)
})