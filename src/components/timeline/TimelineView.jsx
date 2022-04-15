import './Timeline.css';
import {LoadPosts, UpdatePost} from './Timeline';
import { useState } from "react";
import { Button, Modal } from 'react-bootstrap';

function TimelineView(){
  
   LoadPosts()  
  
  let posts = (JSON.parse(localStorage.getItem("posts")))
  const [show, setShow] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const handleClose = () => setShow(false);

  function handleSave(id){
    setShow(false);
    let title = document.getElementById("newTitle").value;
    let body = document.getElementById("newBody").value;
      UpdatePost(title, body, id)
    console.log(id)
  }

  function modalindex(index) {
    setShow(true);
    setModalIndex(index)
  }

  return (
    

  <section>

<button class="btn1"> Post</button>
    <input
            id="translationInput"
            type="text"
            placeholder="Search post"
            />
        <button class="btn1">Search</button>

{posts.map((post, index) => (  



<div class="card">
  <div class="card-body">
    <p class="card-text"></p>
    <p>{post.title}</p>
    <p>{post.body}</p>
    <button type="button" class="btn btn-primary">React</button>
    <Button variant="primary" onClick={() => modalindex(index)}>
        Edit
    </Button>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="form-group">
            <label for="newTitle">title:</label>
            <input type="text" defaultValue={posts[modalIndex].title} class="form-control" id="newTitle"></input>
            <label for="newBody">body:</label>
            <input type="text" defaultValue = {posts[modalIndex].body} class="form-control" id="newBody"></input>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSave(posts[modalIndex].id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  </div>
</div>  


))} 



        
</section>
  );
};
export default TimelineView;

