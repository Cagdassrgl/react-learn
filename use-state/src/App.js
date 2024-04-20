import "./App.css";
import { useState } from "react";
import Course from "./Course";

function App() {
  const [courses, setCourses] = useState([]);

  const handleClick = () => {
    const images = ["angular", "bootstrap", "csharp", "kompleweb"];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setCourses([...courses, randomImage]);
  };

  return (
    <div className="App">
      <button className="Button" onClick={handleClick}>
        Generate Random Image
      </button>
      <div className="courseList">
        {courses.map((course, index) => (
          <Course key={index} image={course} />
        ))}
      </div>
    </div>
  );
}

export default App;
