async function LoadPost() {

  let posts = []
  let postsData = []
 await fetch('https://localhost:44370/api/Posts/' + sessionStorage.getItem('postId'))  
      .then(response => response.json())
      .then(data => posts.push(data));     
      posts.map(post=>(
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
      localStorage.setItem("post", JSON.stringify(postsData))     
       
    
};

async function LoadReplies() {

  let replies = []
  let repliesData = []   

  await fetch('https://localhost:44370/api/Posts/replies/' + sessionStorage.getItem('postId'))  
      .then(response => response.json())
      .then(data => replies.push(data));      
      replies.map((reply) => {   
          reply.map((reply1) => {           
            repliesData.push({
              id: reply1.reply_Id,
              body: reply1.body              
            })          
        });
      });
      localStorage.setItem("replies", JSON.stringify(repliesData))   
      console.log(repliesData)
       
      
                   
};


const NewReply = async (body, Post_id) => {
  fetch("https://localhost:44370/api/Replies", { 
  method: 'POST',      
  headers: {'Content-Type': 'application/json; charset=utf-8 '},
  body: JSON.stringify({ 
    body: body,
    Post_id: Post_id
  }),
});
};



export  {LoadReplies, NewReply, LoadPost}