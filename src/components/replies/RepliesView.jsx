import React from "react";
import { LoadReplies, NewReply} from './Replies';


function RepliesView(){
LoadReplies()
let replies = (JSON.parse(localStorage.getItem("replies")))

function handleReply(){
    let body = document.getElementById("reply").value;
    NewReply(body)
  }

return (    
<section>

{replies.map((reply) => (
    <p>{reply.body}</p>
))}

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