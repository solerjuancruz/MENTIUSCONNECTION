const express = require('express')
    router = express.Router()

const service = require('../services/user.service')


//http://localhost:3000/api/user

    router.get('/', async(req,res)=>{
        const users = await service.getAllUsers()
        res.send(users)
    })

    router.get('/:id', async(req,res)=>{
        const user = await service.getUserId(req.params.id)
        if(user.length == 0)
            res.status(404).json('no record with give id: '+ req.params.id)
        else
        res.send(user)
    })

    router.delete('/:id', async(req,res)=>{
        const affectedRows = await service.deleteUser(req.params.id)
        if(affectedRows.length == 0)
            res.status(404).json('no record with give id: '+ req.params.id)
        else
        res.send('User delete')
    })

    router.post('/', async(req,res)=>{
        const affectedRows = await service.storeUser()
        if(affectedRows.length == 0)
            res.status(404).json('User no save')
        else
        res.send('User save')
    })


    module.exports = router;