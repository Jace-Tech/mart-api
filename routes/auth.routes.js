const { handleAdminSignup } = require('../controllers/auth.controller')
const router = require('express').Router()

// ROUTES
router.post("/admin/signup", handleAdminSignup)

module.exports = router