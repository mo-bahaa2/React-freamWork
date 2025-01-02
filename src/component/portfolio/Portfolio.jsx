import React, { useEffect, useState } from 'react';
import port from '../portfolio/portfolio.module.css';
import image1 from '../../assets/poert1.png';
import image2 from '../../assets/port2.png';
import image3 from '../../assets/port3.png';

export default function Portfolio() {
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    document.title = 'Portfolio';
  }, []);

  const handleImageClick = (e, imageSrc) => {
    e.stopPropagation(); 
    setModalImage(imageSrc); 
  };
  const images = [image1, image2, image3, image1, image2, image3];

  return (
    <>
      <div className="min-vh-100">
        <div className="pt-3 d-flex justify-content-center flex-column align-items-center position-relative my">
          <div className="text-center pt-4 text-black">
            <h2 className={`text-uppercase mb-3 fs-1 fw-bolder ${port.myColor}`}>
              Portfolio Component
            </h2>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className={`${port.line} me-3`}></div>
            <i className={`fa-solid fa-star ${port.myColor}`}></i>
            <div className={`${port.line} ms-3`}></div>
          </div>

          <div className="container my-3">
            <div className="row gy-4">
              {images.map((image, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div
                    className="position-relative"
                    onClick={(e) => {handleImageClick(e, image)}}
                  >
                    <img
                      src={image}
                      alt={`image${index + 1}`}
                      className="w-100 rounded rounded-2 overflow-hidden"
                    />
                    <div
                      className={`position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center ${port.layer}`}
                    >
                      <i className="fa-solid fa-plus fa-5x text-white"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          <div
            className={`mainImage position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center ${
              modalImage ? 'd-flex' : 'd-none'
            }`}
            onClick={handleImageClick}
          >
            <img
              src={modalImage || ''}
              className={`${port.mainImage}`}
              alt="Modal"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      </div>
    </>
  );
}