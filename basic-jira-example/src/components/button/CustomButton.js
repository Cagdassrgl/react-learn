import "./index.css";

function CustomButton({ onClicked }) {
  return (
    <div>
      <button className="customButton" onClick={onClicked}>
        Oluştur
      </button>
    </div>
  );
}

export default CustomButton;
