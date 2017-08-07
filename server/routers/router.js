const User = require('../app/controller/user')
const express = require('express')
const router = express.Router()

router.get('/user/test', function(req,res) {
  res.json({
    success:1
  })
})
// 登录接口
router.post('/user/signin', User.checkSignin)

module.exports = router