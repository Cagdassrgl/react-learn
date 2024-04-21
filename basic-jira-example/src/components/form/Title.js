import "./index.css";
import { useState } from "react";

function CustomTitle({ setName }) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
    setName(title);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTitle("");
  };

  return (
    <div>
      <form className="titleForm" onSubmit={onSubmit}>
        <label className="titleLabel">Başlık</label>
        <br></br>
        <input
          className="titleInput"
          type="text"
          value={title}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default CustomTitle;
