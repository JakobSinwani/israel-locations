const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/posts')
    .then(r => console.log('sucess'))
    .catch(e => console.log(e));


const postSchema = new mongoose.Schema({
    name: String,
    creationTime: String,
    tags: [String],
    isPublished: Boolean
})

const Post = mongoose.model('Post', postSchema);


async function sendPost() {
    const post = new Post({
        name: 'jewish',
        creationTime: new Date(),
        tags: ['reforms', 'jewish'],
        isPublished: false
    })

    const result = await post.save()
    console.log(result)
}

sendPost()