import express from 'express';
import { controllers } from '../controllers/posts.controllers.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('hola mundo')
})

router.get('/posts',controllers.getProducts);

router.post('/posts', controllers.create )

router.put('/posts/like/:id', controllers.editarLike);

router.delete('/posts/:id', controllers.deleteLike);






export default router;
