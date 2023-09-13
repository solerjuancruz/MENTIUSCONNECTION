const db = require ('../db')

module.exports.getAllUsers = async () =>{
     const [users] = await  db.query("SELECT * FROM users")       
        .catch(err => console.log(err))
        return users;
}

module.exports.getUserId = async (id) => {
    const [user] = await db.query("SELECT * FROM users WHERE id = ?",[id])
    return user;
}

module.exports.deleteUser = async (id) => {
    const [{affectedRows}] = await db.query("DELETE  FROM users WHERE id = ?",[id])
    return user.affectedRows;
}

module.exports.storeUser = async (req, res) =>{
    const {name,surname,role,email,password,description, image} = req.body
    const [{affectedRows}] = await db.query('INSER INTO users(name,surname,role,email,password,description,image VALUES (?,?,?,?,?,?,?)',[name,surname,role,email,password,description,image])
    res.send({affectedRows})
}
/* module.exports.updateUser = async (obj,id=0) => {
    //const [{affectedRows}] = await db.query("PUT  FROM users WHERE id = ?",[id]) 
    const [{affectedRows}] = await db.query("CALL usp_user_add",[id])
    return user.affectedRows;
} */