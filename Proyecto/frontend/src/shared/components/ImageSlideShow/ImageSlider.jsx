import React, { useState, useEffect } from "react";
import Thumbnail from "./Thumbnail";

const ImageSlider = ({ imgs, showThumbnails = false }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [imgs]);

  const next = () => setIndex(index === imgs.length - 1 ? 0 : index + 1);
  const prev = () => setIndex(index === 0 ? imgs.length - 1 : index - 1);

  return (
    <div>
      <img src={imgs[index]} alt="slider" width="400" />
      <div>
        <button onClick={prev}>Previous</button>
        <button onClick={next}>Next</button>
      </div>

      {showThumbnails && <Thumbnail arr={imgs} onSelect={setIndex} />}
    </div>
  );
};

export default ImageSlider;
