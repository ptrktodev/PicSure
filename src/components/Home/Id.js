import React from "react";
import { saveAs } from "file-saver";
import { ReactComponent as Down } from "../../assets/down.svg";
import "./Id.css";

const Id = ({ img, id }) => {
  async function fetchImage(url) {
    const response = await fetch(url);
    const blob = await response.blob();
    return blob;
  }

  function handleDownloadClick() {
    fetchImage(`${img}`)
      .then((blob) => {
        saveAs(blob, `${id}.jpeg`);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  //images.pexels.com/photos/164634/pexels-photo-164634.jpeg

  return (
    <button onClick={handleDownloadClick} className="download">
      <Down />
    </button>
  );
};

export default Id;
