const router = require('express').Router()
const path = require('path')

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'about.html'))
})

router.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'projects.html'))
})

module.exports = router;