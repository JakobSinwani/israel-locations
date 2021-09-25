const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const posts = require('./posts/index');
const cors = require('cors');

app.use(cors());
app.use(express.json());


app.get('/users/:ortal/:haim', (req, res)=> {
    const {haim, ortal} = req.params;
    res.status(200).send(ortal + ' ' + haim);
})

app.get('/', ((req,res)=> {
    res.send(req.query);
}))

app.use('/posts', posts);

app.listen(port, ()=> {
    console.log('run in port:  ' + port)
})
