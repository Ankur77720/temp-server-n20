const { Router } = require('express');
const indexController = require('../controllers/index.controller')
const router = Router();

console.log(indexController)


router.get('/', indexController.index)

router.get('/home', indexController.home)

module.exports = router;