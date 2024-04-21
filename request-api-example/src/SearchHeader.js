import "./SearchHeader.css";
import { useState } from "react";

function SearchHeader({ search }) {
  const [formText, setFormText] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(formText);
  };

  const handleFormChange = (event) => {
    setFormText(event.target.value);
  };

  return (
    <div className="SearchHeader">
      <form onSubmit={handleFormSubmit}>
        <label>Ne Ariyorsunuz?</label>
        <input
          type="text"
          name="search"
          value={formText}
          onChange={handleFormChange}
        />
      </form>
    </div>
  );
}

export default SearchHeader;
