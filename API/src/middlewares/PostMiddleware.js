const { validate: isUuid } = require("uuid")
const Post = require("../models/Post")

module.exports = {
  async validateId(request, response, next) {
    const { id } = request.params

    if(!isUuid(id)) {
      return response.status(400).json({ error: "Id inválido."})
    }
    try {
      const post = await Post.findById(id)
      response.post = post
      if(!post) {
        return response.status(404).json({ error: "Post não encontrado."})
      }
    } catch(err) {
      return response.status(500).json({error: err.message})
    }
    next()
  },
}