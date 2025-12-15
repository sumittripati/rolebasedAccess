const express = require('express');
const router = express.Router();
const register = require('../controllers/authcontroller/register');
const login = require('../controllers/authcontroller/login');

const services = require('../controllers/authcontroller/service');
const blog = require('../controllers/authcontroller/blog');

const authMiddleware = require('../middlewares/authmiddleware');

router.post('/register',register)
router.post('/login',login)

router.get('/service', authMiddleware, services)
router.get('/blog', authMiddleware, blog)

module.exports = router;