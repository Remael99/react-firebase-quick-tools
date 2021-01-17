import React, { useRef, useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];
  const timer = useRef();

  const handleChange = (e) => {
    e.preventDefault();
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("please select proper file (png or jpeg) ");
      timer.current = window.setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  return (
    <form className="uploadform">
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>

      <div className="uploadform__output">
        {error && (
          <div className="uploadform__error">
            <p>{error}</p>
          </div>
        )}

        {file && <div> {file.name} </div>}

        {file && (
          <div>
            <ProgressBar file={file} setFile={setFile} />
          </div>
        )}
      </div>
    </form>
  );
};

export default UploadForm;
