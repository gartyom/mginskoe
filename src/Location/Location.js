import "./Location.css";
import React from "react";

export default function Route() {
  return (
    <div className="Location" id="Location">
      <div className="Location-content">
        <div
          style={{ position: "relative", overflow: "hidden" }}
          className="Location-mapContainer"
        >
          <div className="Location-title">КАК ДОБРАТЬСЯ</div>
          <div
            style={{ position: "relative", overflow: "hidden" }}
            className="ymap-wrapper"
          >
            <a
              href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontsize: "12px",
                position: "absolute",
                top: "0px",
              }}
            >
              Яндекс Карты
            </a>
            <a
              href="https://yandex.ru/maps/?ll=30.891969%2C59.764672&mode=usermaps&source=constructorLink&um=constructor%3A89adc2c973048f47c039ac409a5d52daac10453e3b2fc62d86e8c1cba28b63d1&utm_medium=mapframe&utm_source=maps&z=10"
              style={{
                color: "#eee",
                fontsize: "12px",
                position: "absolute",
                top: "0px",
              }}
            >
              Яндекс Карты — транспорт, навигация, поиск мест
            </a>
            <iframe
              title="ymaps"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A89adc2c973048f47c039ac409a5d52daac10453e3b2fc62d86e8c1cba28b63d1&amp;source=constructor"
              allowFullScreen={true}
              style={{
                position: "absolute",
                outline: "none",
                border: "none",
              }}
              className="Location-mapFrame"
            ></iframe>
          </div>
        </div>
        <div className="Location-text">
          <div className="Location-description">
            <b>На общественном транспорте:</b> от Московского вокзала до ж/д
            станции Мга на электричке, далее на 574 автобусе до остановки
            Пухолово, 5 минут пешком, и Вы в поселке. Стоимость такси от ж/д
            станции до поселка составляет ~ 250 руб.
            <ul className="Location-list">
              <li className="Location-listItem">до деревни Пухолово - 500 м</li>
              <li className="Location-listItem">до ж/д станции Мга - 5 км</li>
              <li className="Location-listItem">
                Ближайшая остановка общественного транспорта - 350 м
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
