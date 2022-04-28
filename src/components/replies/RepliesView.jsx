import React from "react";
import { LoadReplies, NewReply, LoadPost} from './Replies';
import './Replies.css';
import Nav from "../navbar/Navbar";



function RepliesView(){
LoadReplies()
let replies = JSON.parse(localStorage.getItem("replies"))
LoadPost()
let post = (JSON.parse(localStorage.getItem("post")))

function handleReply(){
    let body = document.getElementById("reply").value;
    NewReply(body, sessionStorage.getItem('postId'))    
  }


return ( 
   
<section>
<Nav />
<div class="container">
  <div class="row">
    <div class="col-sm">
      
    </div>
    <div class="col-sm">
      
      <div class="card" style = {{ display: "block", margin: "auto", marginBottom: 15, marginTop: 15}}>
        <div class="card-body">
          <p class="card-text"></p>
          <h5>Post</h5>
          <p>{post[0].title}</p>
          <p>{post[0].body}</p>       
      </div>
      </div>



          
          {replies.map((reply) =>
          <div class="card" style = {{ backgroundColor: "gray", display: "block", margin: "auto", marginBottom: 15}}>
          <div class="card-body">
            <p class="card-text"></p> 
          <p>{reply.body}</p>
          </div>
      </div>
        )}  




      <input style={{display: "block", margin: "auto", marginBottom: 20}}
              id="reply"
              type="text"
              placeholder="Reply"
      />
          <button style={{display: "block", margin: "auto"}} class="btn btn-primary" onClick={handleReply}>Reply</button>

    </div>
    <div class="col-sm">
      
    </div>
  </div>
</div>
  

       
</section>  

    )

}



export default RepliesView;