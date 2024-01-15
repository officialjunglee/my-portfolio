import express from "express";
import { Blog } from "../models/blogModel.js";

const router = express.Router();

//Create a blog
router.post('/createblog', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.content
        ) {
            return response.status(400).send({ message: 'Send proper data' })
        }
        console.log(request.body.content)
        const newBlog = {
            title: request.body.title,
            content: request.body.content
        };

        const blog = await Blog.create(newBlog);

        return response.status(201).send(blog);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Get all blogs
router.get('/blogs', async (request, response) => {
    try {
        const blogs = await Blog.find({});

        return response.status(200).json(blogs);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Get blog by id
router.get('/blog/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const blogs = await Blog.findById({ id });

        return response.status(200).json(blogs);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Update blog by id

router.put('/updateblog/:id', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.content
        ) {
            return response.status(400).send({ message: 'Send proper data' })
        }
        const { id } = request.params;
        const result = await Blog.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).json({ message: 'Couldnt locate data' })
        }
        return response.status(200).json({ message: 'Blog updated' });
    } catch (error) {
        console.log(error.message);
        response.status(400).send({ message: error.message });
    }
});

//Delete blog by id

router.delete('/deleteblog/:id', async (request, response) => {
    try {

        const { id } = request.params;
        const result = await Blog.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: 'Couldnt locate data' })
        }
        return response.status(200).json({ message: 'Blog deleted' });
    } catch (error) {
        console.log(error.message);
        response.status(400).send({ message: error.message });
    }
});

export default router;