const taskController = require("../Controller/taskController")



// Rotas da aplicação
const routes = require("express").Router()


// Essa é a rota padrão. (Get) http://localhost:3000/ 


// Rotas como esta precisam de controller para organização
routes.post("/", taskController.createTask) 
routes.get("/", taskController.getAllTasks) 

module.exports = routes