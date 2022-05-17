const express = require('express')
const router = express.Router()
const authorize = require('../middlewares/auth')

router.post('/signin', (req, res, next) => {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to sign in a specific user' */

    /*	#swagger.parameters['username'] = {
            in: 'query',
            description: 'Username information.',
            required: true,
    } */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */

    if(false){
        res.status(401).json({
            data: [],
            message: 'UnAuthenticated User'
        })
    } else{
        res.status(200).json({
            data: [],
            message: 'Authentication successed'
        })
    }


})

router.route('/users/:id').get(authorize, (req, res) => {
    // #swagger.tags = ['User']
    // #swagger.description = 'Endpoint to get a specific user.' 
    const users = [{'id':'100'}]
    const data = users.find(e => e.id === req.params.id)

    /* #swagger.responses[200] = { 
      schema: { "$ref": "#/definitions/User" },
      description: "User returned successfully." } */
    console.log(data);
    if (data) {
        res.status(200).json({
            data: [],
            message: 'Successfully found'
        })
    } else{
        res.status(404).json({
            data: [],
            message: 'User not found'
        })
    }


})

module.exports = router