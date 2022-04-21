async function LoadReplies() {

    let replies = []
    let repliesData = []
  
    await fetch("https://localhost:44370/api/Replies")  
        .then(response => response.json())
        .then(data => replies.push(data));
        replies[0].map(reply=>(
            repliesData.push({
            id: reply.reply_Id,
            body: reply.body
          })
        ))
        localStorage.setItem("replies", JSON.stringify(repliesData))    
        console.log(localStorage.getItem("replies"))           
      
  };

  const NewReply = async (body) => {
    fetch("https://localhost:44370/api/Replies", { 
    method: 'POST',      
    headers: {'Content-Type': 'application/json; charset=utf-8 '},
    body: JSON.stringify({ 
      body: body
    }),
  });
  };

  export  {LoadReplies, NewReply}