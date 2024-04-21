import "./App.css";
import SearchHeader from "./SearchHeader";
import searchImages from "./api";
import { useState } from "react";
import ImageList from "./components/imageItem";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (text) => {
    const result = await searchImages(text);
    setImages(result);
    console.log(result);
  };

  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <div className="imageList">
        {images.map((image, key) => (
          <ImageList imagePlaceHolder={image} key={key} />
        ))}
      </div>
    </div>
  );
}

export default App;
