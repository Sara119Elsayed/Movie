"use client";

import React, { useState } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

function SliderMovie({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 400;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="position-relative" style={{ maxWidth: cardWidth, margin: '0 auto' }}>
      <div className="overflow-hidden" style={{ width: '100%' }}>
        <Image
          src={`${images[currentIndex].poster_path}`}
          alt=""
          width={700} 
          height={200} 
          className="img-fluid rounded"
          style={{ objectFit: "cover" }}
        />
      </div>

      <button onClick={goToPrevious} className="btn btn-dark position-absolute top-50 start-0 translate-middle-y ms-2">
        &lt;
      </button>
      <button onClick={goToNext} className="btn btn-dark position-absolute top-50 end-0 translate-middle-y me-2">
        &gt;
      </button>
    </div>
  );
}

export default SliderMovie;