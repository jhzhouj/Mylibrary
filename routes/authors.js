const express = require('express')
const router = express.Router()
const Author = require('../models/author')
//const Book = require('../models/book')

// All Authors Route
router.get('/', (req, res) => {
    res.render('authors/index')
})

// New Author Route
router.get('/new', (req, res) => {
    res.render('authors/new', { author: new Author() })
  })

// Create Author Route
router.post('/', async (req, res) => {
    res.send(req.body.name)
})



module.exports = router