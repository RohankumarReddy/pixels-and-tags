const express =require('express')
const app =express()
const port =3000

const userRoutes = require('./routes/route')

app.use('/users',userRoutes)

app.listen(port,()=>{
    console.log('server is running')
})