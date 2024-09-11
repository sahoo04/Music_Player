// ImageShowcase.js
import React, { useEffect, useState } from 'react';
import './ImageShowcase.css'; // Import the CSS for styling

const images = [
  'https://via.placeholder.com/600x400?text=Image+1',
  'https://via.placeholder.com/600x400?text=Image+2',
  'https://via.placeholder.com/600x400?text=Image+3',
  'https://via.placeholder.com/600x400?text=Image+4',
];

const ImageShowcase = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-showcase">
      <img src={images[currentImage]} alt="Showcase" />
    </div>
  );
};

export default ImageShowcase;
