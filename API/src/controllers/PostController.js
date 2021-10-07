const { response } = require("express")
const { v4: uuid } = require("uuid")

const Post = require("../models/Post")

module.exports = {
  async index(request, response){
    try {
      const posts = await Post.find()
      return response.status(200).json({posts})
    } catch (err) {
      return response.status(500).json({error: err.message})
    }
  },

  async store(request, response) {
    const { title, description } = request.body

    if(!title || !description) {
      return response.status(400).json({ error: "Faltando título ou descrição!"})
    }
    const post = new Post({
      id: uuid(),
      title,
      description,
      liked: false,
    })
    
    try{
      await video.save()

      return response.status(201).json({message: "Vídeo adicionado com sucesso!"})
    } catch (err) {
      return response.status(400).json({error: err.message})
    }
  },

  async update(request, response) {
    const { title, description } = request.body

    if(!title && !description) {
      return response.status(400).json({error: "Você deve informar um novo título ou uma nova descrição."})
    }  

    if(title) request.post.title = title
    if(description) request.post.description = description

    try{
      await response.post.save()
      return response.status(200).json({message: "Post atualizado com sucesso."})
    } catch(err) {
      response.status(500).json({error: err.message})
    }  
  }

}