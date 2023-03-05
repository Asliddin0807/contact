const router = require('express').Router()
const { regis, login, logOut, editUser, getDeleteAccaunts, deleteAccaunt, forgotPassword, forgotUpdate } = require('../controllers/usersController')
const { authMiddleWare } = require('../middleware/middleware')
 
router.get('/logOut', logOut)
router.get('/deleteAccount/:id', deleteAccaunt)

router.post('/regis', regis)
router.post('/login', login)
router.post('/getDeleteAccount', authMiddleWare, getDeleteAccaunts)

router.put('/edit/:id', authMiddleWare, editUser)
router.post('/forget', forgotPassword)
router.put('/forgotPassword/:id', forgotUpdate)

module.exports = router