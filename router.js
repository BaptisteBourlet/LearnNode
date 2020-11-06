const express = require('express')
const router = express.Router();
const pageController = require('./controller/dataUser.js')

//static files
router.use(express.static('public'))
router.get('/',pageController.index)
router.get('/inscription',pageController.inscription)
router.get('/post',pageController.post)

//error managememnt
router.use((req, res, next)=> {
    res.status(404).render(`error`)
})

module.exports = router;