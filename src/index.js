import express from 'express';
import connectDB from './config/dbConfig.js';
import { s3Uploader } from './config/multerconfig.js';
import { createPost } from './controllers/postController.js';

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.text());

// app.get('/post',s3Uploader.single('image'), (req, res) => {
//     res.send("post");
// })

app.post('/posts', s3Uploader.single('image'), createPost)

app.listen(PORT, ()=>{
    console.log(`Server is listning at ${PORT}`);
    connectDB();
})