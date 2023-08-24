// Controllers
const express = require('express')
const router = express.Router()
const tweetController = require('../controllers/tweet-controller')
const userController = require('../controllers/user-controller')
router.get('/tweets', tweetController.getTweets)

router.use('/', (req, res) => res.redirect('/tweets'))

// Admin
const admin = require('./modules/admin')
router.use('/admin', admin)

// Sign up
router.get('/signup', userController.signUpPage)
router.post('/signup', userController.signUp)

// Tweets
router.get('/tweets', tweetController.getTweets)

router.use('/', (req, res) => res.redirect('/tweets'))
module.exports = router
