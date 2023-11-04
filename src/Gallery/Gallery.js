import { useRef, useState } from "react";
import "./Gallery.css";
import "./GalleryPopup.css";

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(undefined);
  const Popup = useRef(undefined);

  function closeGalleryPopup() {
    Popup.current.classList.remove("open");
  }

  function handleCardClick(e) {
    if (e.target.tagName === "IMG") {
      setCurrentImage(e.target.dataset.fullImage);
      Popup.current.classList.add("open");
    }
  }

  function renderGalleryCards() {
    const g = [
      {
        small: "/images/small/dji_fly_1.jpg",
        img: "/images/uncompressed/dji_fly_1.jpg",
      },
      {
        small: "/images/small/dji_fly_2.jpg",
        img: "/images/uncompressed/dji_fly_2.jpg",
      },
      {
        small: "/images/small/dji_fly_3.jpg",
        img: "/images/uncompressed/dji_fly_3.jpg",
      },
      {
        small: "/images/small/dji_fly_4.jpg",
        img: "/images/uncompressed/dji_fly_4.jpg",
      },
      {
        small: "/images/small/dji_fly_5.jpg",
        img: "/images/uncompressed/dji_fly_5.jpg",
      },
      {
        small: "/images/small/dji_fly_6.jpg",
        img: "/images/uncompressed/dji_fly_6.jpg",
      },
      //   {
      //     img: "/images/dji_fly_7.jpg",
      //   },
      //   {
      //     img: "/images/dji_fly_8.jpg",
      //   },
      //   {
      //     img: "/images/dji_fly_9.jpg",
      //   },
    ];

    return (
      <div className="Gallery-cards" onClick={handleCardClick}>
        {g.map((image, index) => {
          return (
            <div className="Gallery-card" key={index}>
              <img
                className="Gallery-img"
                src={process.env.PUBLIC_URL + image.small}
                alt=""
                data-full-image={process.env.PUBLIC_URL + image.img}
                loading="lazy"
              ></img>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="Gallery" id="Gallery">
      <div className="Gallery-title">ГАЛЕРЕЯ</div>

      <div className="Gallery-content">
        <div className="Gallery-videoContainer">
          <video className="Gallery-video" controls preload="metadata">
            <source
              src={
                process.env.PUBLIC_URL +
                "/videos/video_2023-09-12_01-48-32.mp4#t=0.001"
              }
              type="video/mp4"
            ></source>
          </video>
        </div>
        {renderGalleryCards()}
        <div className="GalleryPopup" ref={Popup}>
          <div className="GalleryPopup-content">
            <img
              className="GalleryPopup-closeIcon"
              src={process.env.PUBLIC_URL + "/icons/close.png"}
              alt="close"
              onClick={closeGalleryPopup}
            ></img>
            <img className="GalleryPopup-image" src={currentImage} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}
