async function LoadPost() {

  let posts = []
  let postsData = []
console.log(sessionStorage.getItem('postId'))
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

  await fetch('https://localhost:44370/api/Replies/post/' + sessionStorage.getItem('postId') )  
      .then(response => response.json())
      .then(data => replies.push(data));
      replies.map(reply=>(
          repliesData.push({
          id: reply.reply_Id,
          body: reply.body
        })
      ))
      localStorage.setItem("replies", JSON.stringify(repliesData))    
      console.log(localStorage.getItem("replies"))      
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