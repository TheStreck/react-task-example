import { useContext, useState } from "react";

import { TaskContext } from "../context/taskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({
      title,
      description,
    });

    setTitle("")
    setDescription("")
  };

  return (
    <form className="form w-50 mx-auto p-sm-1 p-md-5 my-2 mb-4" onSubmit={handleSubmit}>
      <h2>Add a new task</h2>
      <div className="form-group my-3">
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        className="form-control mb-2"
        autoFocus
      />
      <textarea
        placeholder="Description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
        className="form-control"
      ></textarea>
      </div>
      <button className="btn btn-success w-100">Send!</button>
    </form>
  );
}

export default TaskForm;
