import Post from "../model/Post.js"

export const createPost = async(req,res) => {
    const {author, title, content, picture} = req.body
    const post = await Post.create({author, title, content, picture})
    res.json(post)
}

export const getAll = async(req,res) => {
    const posts = await Post.find()
    res.json(posts)

    if(!posts)
    {
        res.status(404).json({message: 'No posts found'})
    }
}

export const getOne = async(req,res) => {
    const {id} = req.params
    const posts = await Post.findById(id)
    res.json(posts)

    if(!posts)
    {
        res.status(404).json({message: 'This post already deleted!'})
    }
}

export const updatePost = async(req,res) => {
    const post = req.body
    const update = await Post.findByIdAndUpdate(post._id, post,{new: true})
    res.json(update)

    if(!update) {
        res.status(404).json({message: 'This post is not defined'})
    }
}

export const deletePost = async(req,res) => {
    const {id} = req.params
    const deletePost = await Post.findByIdAndDelete(id)

    if(!deletePost) {
        res.status(404).json({message: 'This post is deleted'})
    }
    res.json(deletePost,'Post deleted succesfully')
}