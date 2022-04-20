import './Timeline.css';
import {LoadPosts, UpdatePost, NewPost} from './Timeline';
import { useState } from "react";
import { Button, Modal } from 'react-bootstrap';


function TimelineView(){
   LoadPosts()
  let posts = (JSON.parse(localStorage.getItem("posts")))
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");


  function handlePost(){
    setShow2(false);
    let title = document.getElementById("PostTitle").value;
    let body = document.getElementById("PostBody").value;
    let senderUserId = document.getElementById("PostSenderUserId").value;
    let targetUserId = document.getElementById("PostTargetUserId").value;
    let targetGroupId = document.getElementById("PostTargetGroupId").value;
    let targetTopicId = document.getElementById("targetTopicId").value;
        NewPost(title, body, senderUserId, targetUserId, targetGroupId, targetTopicId)
  }


  async function handleUpdate(id){
    setShow(false);
    await UpdatePost(title, body, id)
    console.log(id)
  }


  function modalindex(index) {
    setShow(true);
    setModalIndex(index)
  }


  const handleShow = () => setShow2(true);
  return (
  <section>
<Button variant="primary" onClick={handleShow}>
        Post
      </Button>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="form-group2">
            <label for="newTitle">title:</label>
            <input type="text" placeholder='title' class="form-control" id="PostTitle"></input>
            <label for="newBody">body:</label>
            <input type="text"  placeholder='body' class="form-control" id="PostBody"></input>
            <label for="newBody">senderUserId:</label>
            <input type="text"  placeholder='senderUserId' class="form-control" id="PostSenderUserId"></input>
            <label for="newBody">targetUserId:</label>
            <input type="text"  placeholder='targetUserId' class="form-control" id="PostTargetUserId"></input>
            <label for="newBody">targetGroupId:</label>
            <input type="text"  placeholder='targetGroupId' class="form-control" id="PostTargetGroupId"></input>
            <label for="newBody">targetTopicId:</label>
            <input type="text"  placeholder='targetTopicId' class="form-control" id="targetTopicId"></input>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePost}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
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
    <a href="/replies"><button type="button" class="btn btn-primary">Reply</button></a>
    <Button variant="primary" onClick={() => modalindex(index)}>
        Edit
    </Button>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="form-group">
            <label for="UpdatedTitle">title:</label>
            <input type="text" defaultValue = {posts[modalIndex].title} class="form-control" id="newTitle" onChange={(e) => setTitle(e.target.value)}></input>
            <label for="UpdatedBody">body:</label>
            <input type="text" defaultValue = {posts[modalIndex].body} class="form-control" id="newBody" onChange={(e) => setBody(e.target.value)}></input>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleUpdate(posts[modalIndex].id)}>
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

