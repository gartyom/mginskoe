import { useRef, useState } from "react";
import "./News.css";
import "./NewsCard.css";

export default function News() {
  const slider = useRef(0);
  const [mouseDown, setMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e) => {
    setMouseDown(true);
    setStartX(e.pageX - slider.current.offsetLeft);
    setScrollLeft(slider.current.scrollLeft);
  };

  const stopDragging = (e) => {
    setMouseDown(false);
  };

  const move = (e) => {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }
    const x = e.pageX - slider.current.offsetLeft;
    const scroll = x - startX;
    slider.current.scrollLeft = scrollLeft - scroll;
  };

  function openText(e) {
    e.currentTarget.classList.toggle("open");
  }
  function openCard(e) {}

  function renderNews() {
    const news = [
      {
        image: "/images/news_1.jpg",
        title: "Заголовок",
        date: "21.12.2021",
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia.",
      },
    ];
    return news.map((n, index) => {
      return (
        <div className="NewsCard" onClick={openText} key={index}>
          <div className="NewsCard-title">{n.title}</div>
          <div className="NewsCard-imageWrapper">
            <img
              className="NewsCard-image"
              src={process.env.PUBLIC_URL + n.image}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="NewsCard-date">{n.date}</div>
          <div className="NewsCard-textContainer" onClick={openCard}>
            <div className="NewsCard-textIcon"></div>
            <div className="NewsCard-text">{n.text}</div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="News" id="News">
      <div className="News-content">
        <div className="News-title">НОВОСТИ ПОСЕЛКА</div>
        <div
          className="News-container"
          ref={slider}
          onMouseMove={move}
          onMouseDown={startDragging}
          onMouseUp={stopDragging}
        >
          {renderNews()}
        </div>
      </div>
    </div>
  );
}
