const express = require("express")
const routes = express.Router()

const PostController = require("./controllers/PostController")
const PostMiddleware = require("./middlewares/PostMiddleware")

routes.get("/posts", PostController.index)
routes.post("/posts", PostController.store)
routes.put("/posts/:id", PostMiddleware.validateId, PostController.update)
routes.delete("/posts/:id", PostMiddleware.validateId, PostController.delete)
routes.patch("/posts/:id", PostMiddleware.validateId, PostController.updateLike)

module.exports = routes