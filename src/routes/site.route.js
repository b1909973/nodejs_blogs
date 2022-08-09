const express = require('express')
const router = express.Router() 
const siteController = require('../app/controllers/SiteController')

  router.use('/home', siteController.home)
  
  router.use('/contact', siteController.contact)
  router.use('/search', siteController.search)


  



module.exports = router