import "./Header.css";
import "./Nav.css";
import "./Phone.css";
import { useRef } from "react";

export default function Header() {
  const HeaderIcon = useRef();
  const Nav = useRef();
  const Header = useRef();

  function toggleHeader() {
    HeaderIcon.current.classList.toggle("open");
    Nav.current.classList.toggle("open");
    Header.current.classList.toggle("open");

    document.body.classList.toggle("disabled");
  }

  return (
    <div className="Header" ref={Header}>
      <div className="Header-content">
        <div className="Header-navIcon" ref={HeaderIcon} onClick={toggleHeader}>
          <div className="Header-navIconTop-bun"></div>
          <div className="Header-navIconBottom-bun"></div>
        </div>
        <div className="Nav" ref={Nav}>
          <ul className="Nav-content">
            <li className="Nav-item">
              <a className="Nav-itemLink" href="#About" onClick={toggleHeader}>
                О нас
              </a>
            </li>
            <li className="Nav-item">
              <a className="Nav-itemLink" href="#Map" onClick={toggleHeader}>
                Карта участков
              </a>
            </li>
            <li className="Nav-item">
              <a
                className="Nav-itemLink"
                href="#Location"
                onClick={toggleHeader}
              >
                Как добраться
              </a>
            </li>
            <li className="Nav-item">
              <a className="Nav-itemLink" href="#Places" onClick={toggleHeader}>
                Что рядом
              </a>
            </li>
            <li className="Nav-item">
              <a
                className="Nav-itemLink"
                href="#Gallery"
                onClick={toggleHeader}
              >
                Галерея
              </a>
            </li>
            {/* <li className="Nav-item">
              <a className="Nav-itemLink" href="#News" onClick={toggleHeader}>
                Новости
              </a>
            </li> */}
          </ul>
        </div>
        <div className="Phone">
          <a className="Phone-number" href="tel:88005005523">
            <div className="Phone-numberText">8 800 500 55 23</div>
            <img
              className="Phone-numberIcon"
              src={process.env.PUBLIC_URL + "/icons/phone.png"}
              alt=""
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}
