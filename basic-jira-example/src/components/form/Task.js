import { useState } from "react";

function CustomTask({ setDescription }) {
  const [desc, setDesc] = useState("");

  const handleChange = (e) => {
    setDesc(e.target.value);
    setDescription(desc);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setDesc("");
  };

  return (
    <div>
      <form className="taskForm" onSubmit={onSubmit}>
        <label className="taskLabel">Task Giriniz!</label>
        <br></br>
        <textarea
          className="taskInput"
          type="text"
          rows="5"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default CustomTask;
