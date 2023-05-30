import React, { useState } from "react";
import axios from "axios";
export default function Color() {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const [imageData, setImageData] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    axios
      .post("https://pictools-be.onrender.com/color", formData, {
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
    link.download = "colored image.jpg";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-5 page">Color Image</h1>
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
