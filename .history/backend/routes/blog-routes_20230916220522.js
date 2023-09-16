import express from 'express';
import { addBlog, getAllBlogs, getById, getByUserId, removeBlog, updateBlog } from '../controllers/blog-controller';
;
const blogRouter = express.Router();

blogRouter.get('/', getAllBlogs);
blogRouter.post('/add',  addBlog);
blogRouter.put('/update/:id', updateBlog);
blogRouter.get('/:id', getById);
blogRouter.delete('/:id', removeBlog);
blogRouter.get('/user/:id', getByUserId);

export default blogRouter;