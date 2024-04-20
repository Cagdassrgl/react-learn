import "./Course.css";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import CSharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

function Course({ key, image }) {
  const getImage = () => {
    switch (image) {
      case "angular":
        return Angular;
      case "bootstrap":
        return Bootstrap;
      case "csharp":
        return CSharp;
      case "kompleweb":
        return KompleWeb;
      default:
        return null;
    }
  };

  return (
    <div className="Course">
      <img src={getImage()} alt="" />
    </div>
  );
}

export default Course;
