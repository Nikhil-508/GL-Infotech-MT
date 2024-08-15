import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 3;

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? Math.max(0, images.length - imagesPerPage) : prevIndex - imagesPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= images.length - imagesPerPage ? 0 : prevIndex + imagesPerPage
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-1/3 flex-shrink-0">
            <img src={image} alt={`Slide ${index}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
