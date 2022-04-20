import React from "react";
import { LoadReplies} from './Replies';


function RepliesView(){
LoadReplies()
let replies = (JSON.parse(localStorage.getItem("replies")))

return (    
<section>

<input
        id="translationInput"
        type="text"
        placeholder="Reply"
/>
    <button class="btn btn-primary">Reply</button>

{replies.map((reply) => (
    <p>{reply.body}</p>
))}

</section>  

    )

}



export default RepliesView;