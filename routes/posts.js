const express = require("express");
const router = express.Router();
// importing a single post of PostSchema from model.Post
const Post = require("../model/Post");





//Get all the post
router.get("/", async (req, res) =>{   // this is the parent route. 
    // res.send("I'm inside the posts");
    try{
      const getAllPosts = await Post.find();
      res.json(getAllPosts);
    }catch(err){
      res.json({ message: err });
    }
})

// Get a single post
router.get("/:postId", async (req, res) =>{
    try{
        const getSinglePost = await Post.findById(req.params.postId);
        res.json(getSinglePost);
    }catch(err){
        res.json({ message: err });
    }
})

// Update a single post
router.patch("/:postId", async (req, res) =>{
    try{
       const updateSinglePost = await Post.updateOne(
        { _id: req.params.postId },
        {
            $set: {
                title: req.body.title,
                description: req.body.description
            }
        }
        
       );
       res.json(updateSinglePost);
    }catch(err){
      res.json({ message: err });
    }
});

//delete a single post
router.delete("/:postId", async (req, res)=>{
    try{
       const deleteSinglePost = await Post.remove({ _id: req.params.postId }); 
       res.json(deleteSinglePost);

    }catch(err){
        res.json({ message: err });
    }
});


// save a post to the mongodb database
router.post("/", async (req, res) =>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });

    try{
         const savedPost = await post.save();
         res.json(savedPost);
    }catch(err){
         res.json({ message: err });
    }

    // post.save()
    //     .then((data) => {
    //     res.json(data);
    // })
    // .catch((err) =>{
    //     res.json({ message: err });
    // })
});
module.exports = router;