import express from "express";
import { createPost, getAll, getOne, updatePost, deletePost} from "./posts.controller.js";

const router = express.Router()

router.post('/posts', createPost)
router.get('/posts', getAll)
router.put('/posts', updatePost)

router.get('/posts/:id', getOne)
router.delete('/posts/:id', deletePost)

export default router