const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const port = 3000
const content = require('fs/promises')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    fs.readdir('./files', (err, files) => {
        if (err) {
            console.error(err)
            return res.send('Error reading files')
        }
        res.render('index', { files: files })
    })
})

app.get('/edit/:filename', (req, res) => {
    const filePath = `./files/${req.params.filename}`
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return res.send('Error reading file')
        res.render('edit', { filename: req.params.filename, content: data })
    })
})

app.post('/edit', (req, res) => {
    const filename = req.body.filename
    const content = req.body.description

    if (!content) return res.send('No content provided')

    fs.writeFile(`./files/${filename}`, content, (err) => {
        if (!err) res.redirect('/')
        else res.send('Error editing file')
    })
})


app.post('/create', (req, res) => {
    const filename = req.body.title + '.txt'
    const content = req.body.description

    fs.writeFile(`./files/${filename}`, content, (err) => {
        if (!err) {
            res.redirect('/')
        } else {
            res.send('Error creating file')
        }
    })
})

app.get('/file/:filename', (req, res) => {
    fs.readFile(`./files/${req.params.filename}`, 'utf8', (err, data) => {
        if (err) return res.send('Error reading file')
        res.render('file', { filename: req.params.filename, content: data })
    })
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
