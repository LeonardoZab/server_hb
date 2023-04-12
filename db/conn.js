const Sequelize = require('sequelize')
const sequelize = new Sequelize('vscode','root','senai',{
    host: 'localhost',
    dialect: 'mysql',
})

sequelize.authenticate().then(()=>{
    console.log('Conexão realizada com sucesso')
}).catch((err)=>{
    console.log('Erro de conexão'+err)
})

module.exports = sequelize