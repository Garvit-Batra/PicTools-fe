import React, { useState } from "react";
import axios from "axios";
export default function Resize() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const handleFileInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const [imageData, setImageData] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("w", width);
    formData.append("h", height);
    axios
      .post("https://pictools-be.onrender.com/resize", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "arraybuffer",
      })
      .then((response) => {
        const base64Data = window.btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        setImageData(`data:image/jpg;base64,${base64Data}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const downloadImage = () => {
    var imgData = imageData;
    var byteCharacters = window.atob(
      imgData.replace(/^data:image\/(png|jpeg|jpg);base64,/, "")
    );
    var byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "image/jpg" });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "resized image.jpg";
    link.click();
    URL.revokeObjectURL(url);
  };
  const handleWidth = (event) => {
    if (event.target.value >= 0) {
      setWidth(event.target.value);
    } else {
      setWidth(0);
    }
  };
  const handleHeight = (event) => {
    if (event.target.value >= 0) {
      setHeight(event.target.value);
    } else {
      setHeight(0);
    }
  };
  return (
    <div className="container mt-5">
      <h1 className="mb-5 page">Resize Image</h1>
      <form onSubmit={handleSubmit} className="container">
        <input
          className="form-control my-3 input-class"
          type="file"
          id="formFile"
          onChange={handleFileInputChange}
        />
        <input
          className="form-control my-3 input-class"
          type="number"
          placeholder="Width"
          name="width"
          min={0}
          onChange={handleWidth}
        />
        <input
          className="form-control my-3 input-class"
          type="number"
          placeholder="Height"
          name="height"
          min={0}
          onChange={handleHeight}
        />
        <button type="submit" className="btn my-3" disabled={!selectedFile}>
          Upload
        </button>
        {imageData ? (
          <img
            src={imageData}
            alt="Result will be shown here"
            className="my-3 image-class"
          />
        ) : null}
      </form>
      {imageData ? (
        <button className="btn my-3" onClick={downloadImage}>
          Download Image
        </button>
      ) : null}
    </div>
  );
}
