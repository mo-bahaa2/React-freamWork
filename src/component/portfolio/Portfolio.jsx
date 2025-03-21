import React, { useEffect, useState } from 'react';
import port from '../portfolio/portfolio.module.css';
import image1 from '../../assets/frehCart.png';
import image2 from '../../assets/danisels.png';
import image3 from '../../assets/game reviewer.png';
import image4 from '../../assets/quize app.png'; // Add more images
import image5 from '../../assets/random qoute.png';
import image6 from '../../assets/wather.png';

export default function Portfolio() {
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    document.title = 'Portfolio';
  }, []);

  const handleImageClick = (e, project) => {
    e.stopPropagation();
    setModalImage(project);
  };

  const projects = [
    { id: 1, src: image1, name: 'frehCart', demo: 'https://fresh-cart-ecru-tau.vercel.app/' },
    { id: 2, src: image2, name: 'danisels', demo: 'https://mo-bahaa2.github.io/Daniels/' },
    { id: 3, src: image3, name: 'game reviewer', demo: 'https://mo-bahaa2.github.io/Game-review/' },
    { id: 4, src: image4, name: 'quize app', demo: 'https://mo-bahaa2.github.io/Quize-App/' },
    { id: 5, src: image5, name: 'random qoute', demo: 'https://mo-bahaa2.github.io/Random-Quote/' },
    { id: 6, src: image6, name: 'wather', demo: 'https://mo-bahaa2.github.io/wather/' },
  ];

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
              {projects.map((project) => (
                <div key={project.id} className="col-lg-4 col-md-6">
                  <div
                    className="position-relative"
                    onClick={(e) => handleImageClick(e, project)}
                  >
                    <img
                      src={project.src}
                      alt={project.name}
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
            onClick={() => setModalImage(null)}
          >
            {modalImage && (
              <div
                className="text-center bg-white p-4 rounded"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={modalImage.src}
                  className={`${port.mainImage}`}
                  alt={modalImage.name}
                />
                <h3 className={`mt-3 ${port.myColor}`}>{modalImage.name}</h3>
                <div className="d-flex justify-content-center gap-3 mt-3">
                  <a
                    href={modalImage.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{ backgroundColor: '#1abc9c', color: 'white' }}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}