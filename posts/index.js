const express = require('express');
const router = express.Router();

const posts = [
    {id: 0, text: 'postOne'},
    {id: 1, text: 'postTwo'},
    {id: 2, text: 'postThree'},
]

router.get('/', (req,res)=> {
    res.status(200).send((posts));
})

router.get('/:id', (req,res)=> {
    const {id} = req.params
    res.status(200).send(posts[id]);
})

router.post('/',(req,res)=> {
    const post = {id: posts.length, text: req.body.text}
    posts.push(post);
    res.send(posts);
})

router.delete('/:id', (req,res)=> {
    const {id} = parseInt(req.params);
    const index = posts.findIndex(post => post.id === id);
    posts.splice(index, 1)
    res.status(200).send(posts);
})

// router.delete('/:id', (req, res)=> {
//     res.send(res.query)
// })


module.exports = router