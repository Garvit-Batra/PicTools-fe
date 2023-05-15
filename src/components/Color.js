import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Color() {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const [flag, setFlag] = useState(1);
  const [imageData, setImageData] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    axios
      .post("http://localhost:3001/color", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (flag === 0) {
          setFlag(1);
        } else {
          setFlag(0);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const getImage = async () => {
      try {
        const response = await axios.get("http://localhost:3001/color", {
          responseType: "arraybuffer",
        });
        const base64Data = window.btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        setImageData(`data:image/jpg;base64,${base64Data}`);
      } catch (error) {
        console.error(error);
      }
    };
    getImage();
  }, [flag]);

  const downloadImage = () => {
    axios.post("http://localhost:3001/color/signal").then((response) => {
      if (flag === 0) {
        setFlag(1);
      } else {
        setFlag(0);
      }
    });

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
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileInputChange} />
        <button type="submit">Upload</button>
        <img src={imageData} alt="My pic" />
      </form>
      <button onClick={downloadImage}>Download Image</button>
    </>
  );
}
