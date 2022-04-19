import { createHeaders } from "react";

  const UpdatePost = async (title, body, id) => {    
           try {
          const response = await fetch("https://localhost:44370/api/Posts/" + id, {
            method: "PATCH",
            headers: createHeaders(),
            body: JSON.stringify({
              post_Id: id,
              body: body,
              title: title              
            }),
            });
   
          if (!response.ok) {
            throw new Error("Could not update the post");
          }
          
          const result = await response.json();
          return [null, result];
        } catch (error) {
          return [error.message, null];
        }
      };

  const NewPost = async (title, body, senderUserId, targetUserId, targetGroupId, targetTopicId) => {
    fetch("https://localhost:44370/api/Posts", {
    

    method: 'POST',      
    headers: {'Content-Type': 'application/json; charset=utf-8 '},
    body: JSON.stringify({
      title: title,
      body: body,
      senderUserId: senderUserId,
      targetUserId: targetUserId,
      targetGroupId: targetGroupId,
      targetTopicId: targetTopicId
    }),
  });
  };

  

async function LoadPosts() {

  let posts = []
  let postsData = []

  await fetch("https://localhost:44370/api/Posts")  
      .then(response => response.json())
      .then(data => posts.push(data));
      posts[0].map(post=>(
        postsData.push({
          id: post.post_Id,
          title: post.title,
          user: post.senderUserId,
          targetUser: post.targetUserId,
          targetGroup: post.targetGroupId,
          targetTopic: post.targetTopicId,
          body: post.body
        })
      ))
      localStorage.setItem("posts", JSON.stringify(postsData))    
      console.log(localStorage.getItem("posts"))   
      
    
};



export  {LoadPosts, UpdatePost, NewPost}

