import "./image.css";

function ImageList({ imagePlaceHolder }) {
  return (
    <img
      className="imageListItem"
      src={imagePlaceHolder.urls.small}
      alt={imagePlaceHolder.alt_description}
    />
  );
}

export default ImageList;
