import { useRef, useState } from "react";
import "./Gallery.css";
import "./GalleryPopup.css";

export default function Gallery() {
    const [currentImage, setCurrentImage] = useState(undefined);
    const Popup = useRef(undefined);
    const [imgID, setImgID] = useState(0);
    const [g, setG] = useState([
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
            {
                img: "/images/mush_1.jpg",
                small: "/images/mush_1.jpg",
            },
            {
                img: "/images/mush_2.jpg",
                small: "/images/mush_2.jpg",
            },
            {
                img: "/images/mush_3.jpg",
                small: "/images/mush_3.jpg",
            },
        ])
    

    function closeGalleryPopup() {
        Popup.current.classList.remove("open");
    }

    function next(){
        let i = imgID + 1
        if (i >= g.length) {
           i = 0 
        }
        setCurrentImage(g[i].img)
        setImgID(i)
    }

    function prev(){
        let i = imgID - 1
        if (i < 0) {
            i = g.length - 1
        }
        setCurrentImage(g[i].img)
        setImgID(i)
    }

    function handleCardClick(e) {
        if (e.target.tagName === "IMG") {
            setCurrentImage(e.target.dataset.fullImage);
            setImgID(parseInt(e.target.dataset.id));
            Popup.current.classList.add("open");
        }
    }

    function renderGalleryCards() {
        return (
            <div className="Gallery-cards" onClick={handleCardClick}>
            {g.map((image, index) => {
                return (
                    <div className="Gallery-card" key={index} >
                    <img
                    className="Gallery-img"
                    src={process.env.PUBLIC_URL + image.small}
                    alt=""
                    data-full-image={process.env.PUBLIC_URL + image.img}
                    data-id={index}
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
        <div className="GalleryPopup-gradient">
        </div>
        <img
        className="GalleryPopup-closeIcon"
        src={process.env.PUBLIC_URL + "/icons/close_2.png"}
        alt="close"
        onClick={closeGalleryPopup}
        ></img>
        <div className="GalleryPopup-switch GalleryPopup-prev" onClick={prev}>
            <img className="GalleryPopup-prevImage GalleryPopup-sImage" src={process.env.PUBLIC_URL + '/icons/down-arrow.png'}></img>
        </div>
        <img className="GalleryPopup-image" src={currentImage} alt=""></img>
        <div className="GalleryPopup-switch GalleryPopup-next" onClick={next}>
            <img className="GalleryPopup-nextImage GalleryPopup-sImage" src={process.env.PUBLIC_URL + '/icons/down-arrow.png'}></img>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
}
