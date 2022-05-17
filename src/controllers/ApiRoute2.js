const express = require('express')

const router = express.Router()
const authorize = require('../middlewares/auth')

router.route('/test-get').get(authorize, (req, res, next) => {
    // 	#swagger.tags = ['test']
    // #swagger.description = "endpoint to get"
    res.status(200).json({
        data: [],
        message: 'Successfully found'
    })
})

router.post('/test-post', (req, res, next) => {
    /* 	#swagger.tags = ['test']
        #swagger.description = 'Endpoint to post' */

        /* #swagger.requestBody = {
              required: true,
              content: {
                  "application/json": {
                      schema: { $ref: "#/definitions/User" }
                  },
                    "application/xml": {
                      schema: { $ref: "#/definitions/User" }
                  }
              }
          }
        */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    if (true) {
        res.status(201).json({
            data: [],
            message: 'User Created'
        })
    }else{
        res.status(500).json({
            data: [],
            message: 'Internal error'
        })
    }
})

router.route('/test-delete/:id').delete(authorize, async (req, res, next) => {
    // 	#swagger.tags = ['test']
    // #swagger.description = "endpoint to delete"
    const users = [{'id':'100'}]
    const isUserPresent = users.find(e => e.id === req.params.id)

    if(isUserPresent){
        //deleteing logic
        res.status(200).json({
            msg: [],
            message: 'Deleted!'
        })
    }else{
        res.status(404).json({
            msg: [],
            message: 'Not Found'
        })
    }

})

router.route('/test-put/:id').put(authorize, async (req, res, next) => {
    // 	#swagger.tags = ['test']
    // #swagger.description = "endpoint to update"
    /* #swagger.parameters['id'] = { in: 'path', description: 'Id to update' } */
    /* #swagger.parameters['obj'] = { 
           in: 'body',
           description: 'User information',
           schema: { $ref: "#/definitions/AddUser" }
    } */
    const users = [{'id':'100'}]
    const isUserPresent = users.find(e => e.id === req.params.id)

    /* #swagger.responses[200] = { 
    schema: { "$ref": "#/definitions/User" },
    description: "User returned successfully." } */
    /* #swagger.responses[404] = { 
    description: "Not Found." } */
    if(isUserPresent){
        //some updating logic...
        res.status(200).json({
            msg: [],
            message: 'Updated!'
        })
    }else{
        res.status(404).json({
            msg: [],
            message: 'Not Found'
        })
    }

})

module.exports = router