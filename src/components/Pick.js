import React, { useState } from "react";
import axios from "axios";
export default function Pick() {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const [value, setValue] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    axios
      .post("http://localhost:3001/pick", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setValue(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-5 page">Pick Color From Image</h1>
      <form onSubmit={handleSubmit} className="container">
        <input
          className="form-control my-3 input-class"
          type="file"
          id="formFile"
          onChange={handleFileInputChange}
        />
        <button type="submit" className="btn my-3" disabled={!selectedFile}>
          Upload
        </button>
        {value ? <p className="mt-5">{value}</p> : null}
      </form>
    </div>
  );
}
