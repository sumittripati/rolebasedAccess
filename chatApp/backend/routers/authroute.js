const express = require('express');
const router = express.Router();
const register = require('../controllers/authcontroller/register');
const login = require('../controllers/authcontroller/login');

const services = require('../controllers/authcontroller/service');
const blog = require('../controllers/authcontroller/blog');

const getusers = require('../controllers/admincontroller/getAllusers');
const adminservice = require('../controllers/admincontroller/adminservice');

const authMiddleware = require('../middlewares/authmiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

router.post('/register',register)
router.post('/login',login)

router.get('/service', authMiddleware, services)
router.get('/blog', authMiddleware, blog)

router.get('/admin/users', authMiddleware, adminMiddleware, getusers)   // take data from database and show only to admin
router.get('/admin/service', authMiddleware, adminMiddleware, adminservice) // show profile data to logged in user



module.exports = router;