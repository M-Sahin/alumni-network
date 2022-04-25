import React from "react";
import { LoadReplies, NewReply, LoadPost} from './Replies';



function RepliesView(){
LoadReplies()
LoadPost()
let replies = (JSON.parse(localStorage.getItem("replies")))
let post = (JSON.parse(localStorage.getItem("post")))



function handleReply(){
    let body = document.getElementById("reply").value;
    NewReply(body, sessionStorage.getItem('postId'))    
  }






return ( 
   
<section>
<div class="card">
  <div class="card-body">
    <p class="card-text"></p>
    <h5>Post</h5>
    <p>{post[0].title}</p>
    <p>{post[0].body}</p>       
</div>
</div>



<div class="card">
  <div class="card-body">
    <p class="card-text"></p>
    <p>{replies[0].body}</p>        
</div>
</div>

<input
        id="reply"
        type="text"
        placeholder="Reply"
/>
    <button class="btn btn-primary" onClick={handleReply}>Reply</button>
       
</section>  

    )

}



export default RepliesView;