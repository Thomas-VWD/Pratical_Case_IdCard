import "./Avatar.css";
import reactLogo from "/src/assets/react.svg";

function Avatar() {
  return (
    <div className="avatar-box">
      <h1>Preview</h1>
      <div className="rouded-avatar">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <button className="done-button">DONE !</button>
    </div>
  );
}
export default Avatar;
