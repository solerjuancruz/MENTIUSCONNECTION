const express = require('express'),
    app = express();
    require('express-async-errors');

    const db = require('./db')
    user = require('./controllers/user')

    //middlewers

    app.use('/api/user', user)

    app.use((err,req,res,next)=>{
        console.log(err)
        res.status(err.status || 500).send('Something went wrong!')
    });


    db.query("SELECT 1")
    .then(() =>{ 
        console.log('db connection succed')
        app.listen(3000, () => console.log('server started at 300'))
    })
    .catch(err => console.log('db connection failed. \n' + err))

