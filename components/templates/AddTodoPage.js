import { GrAddCircle } from "react-icons/gr";
import { BsAlignStart } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { MdDoneAll } from "react-icons/md";
import RadioButton from "../element/RadioButton";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddTodoPage() {
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("todo");
const addHandler=async()=>{
  const res=await fetch('/api/todo', {
    method: 'POST',
    body: JSON.stringify({ title, status }),
    headers: { 'Content-Type': 'application/json' },
  })
  const data = await res.json();
  if (data.status === 'success') {
    setTitle('');
    setStatus('todo');
    toast.success('Todo added successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else {
    toast.error(data.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    
  }
}
  return (
    <div className="add-form">

      <h2><GrAddCircle/> Add new todo</h2>

      <div className="add-form__input--first">
      <label htmlFor="title">Title:</label>
          <input id="title" type="text"    value={title}
            onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="add-form__input--second">
        <RadioButton status={status} setStatus={setStatus} value="todo" title="Todo" ><BsAlignStart/></RadioButton>
        <RadioButton status={status} setStatus={setStatus} value="inProgress" title="In Progress"><FiSettings/></RadioButton>
        <RadioButton status={status} setStatus={setStatus} value="review" title="Review"><AiOutlineFileSearch/></RadioButton>
        <RadioButton status={status} setStatus={setStatus} value="done" title="Done"><MdDoneAll/></RadioButton>
      
      <button onClick={addHandler}>Add</button>
      </div>
      <ToastContainer />

    </div>
  )
}

export default AddTodoPage
