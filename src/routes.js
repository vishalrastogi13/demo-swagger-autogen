
const express = require('express')
const ToolsController = require('./controllers/ToolsController')

const router = express.Router()

const apiV1 = require('./controllers/ApiRoute1')
const apiV2 = require('./controllers/ApiRoute2')

router.use('/v1',apiV1)
router.use('/v2', apiV2)

router.get('/test-get', ToolsController.show)
router.post('/test-post', store)
router.delete('/test-delete/:id', ToolsController.delete)

function store(req, res) {
    const tools = {}
    return res.status(201).send({})
}

module.exports = router