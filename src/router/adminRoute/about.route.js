const AboutRoute = require('express').Router()
const aboutController = require('../../controller/adminController/aboutController')

    AboutRoute.get('/', aboutController.Index)
    AboutRoute.post('/', aboutController.Store)
    AboutRoute.get('/:id', aboutController.Show)
    AboutRoute.put('/:id', aboutController.Update)
    AboutRoute.delete('/:id', aboutController.Destroy)

module.exports = AboutRoute