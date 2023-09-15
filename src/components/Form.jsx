import "./Form.css";
import viteLogo from "/vite.svg";
import { useState } from "react";

function Form() {
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <div className="form-box">
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <label>
        Name :
        <input className="input-name" type="text" name="Name" id="1" />
      </label>
      <label>
        Team :
        <input className="input-team" type="text" name="Team" id="2" />
      </label>
      <label>
        Avatar :
        <input
          className="input-upload"
          type="file"
          name="Upload"
          id="3"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
      </label>
      <div className="checkbox">
        <label>
          Pick three favorite teck :
          <input type="checkbox" />
          JavaScript
          <input type="checkbox" />
          REACT
          <input type="checkbox" />
          TypeScript
          <input type="checkbox" />
          HTML5
          <input type="checkbox" />
          CSS3
          <input type="checkbox" />
          MySQL
          <input type="checkbox" />
          Express.js
        </label>
      </div>
    </div>
  );
}

export default Form;
