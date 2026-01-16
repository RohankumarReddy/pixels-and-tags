const express = require('express')
const userModel = require('./usermodel')
const app = express()


app.get('/',async (req,res)=>{
    let new_user = await userModel.create({
        name:'Rohan',
        email:'rohan@gmail.com',
        password:'12nm12nm44mne'


    })
res.send(new_user)     
})

app.get('/update', async (req, res) => {
    const update = await userModel.findOneAndUpdate(
        { name: 'Rohan' },
        { name: 'Rahul' },
        { new: true }
    );
    res.send(update);
});

app.get('/read', async (req, res) => {
    const read = await userModel.find()
    res.send(read)
});

app.get('/delete', async (req, res) => {
    const delete_user = await userModel.findOneAndDelete({ name: 'Rahul' })
    res.send(delete_user)
});

app.listen(3000,()=>{
    console.log('server is running');
})