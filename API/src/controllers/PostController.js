const { response } = require("express")

const Post = require("../models/Post")

module.exports = {
  async index(request, response){
    try {
      const posts = await Post.find()
      return response.status(200).json({posts})
    } catch (err) {
      return response.status(500).json({error: err.message})
    }
  }
}