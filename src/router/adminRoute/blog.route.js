const blogRoute = require('express').Router()
const blogController = require('../../controller/adminController/blogController')
const { BlogvalidateRequest, isBlogRequestValidated } = require('../../validator/blog')

    blogRoute.get('/', blogController.Index)
    blogRoute.post('/',BlogvalidateRequest,isBlogRequestValidated, blogController.Store)
    blogRoute.delete('/:id', blogController.Destroy)
module.exports = blogRoute