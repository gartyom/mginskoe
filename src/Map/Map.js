import { useState, useRef, } from "react";
import "./Map.css";
import "./Popup.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

export default function Map() {
  const popup = useRef(null);
  const [square, setSquare] = useState(0);
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState(0);
  const [plotNumber, setPlotNumber] = useState(0);

  const [plots, setPlots] = useState({
    2182: { price: 80000, square: "9 ", status: "sold" },
    2183: { price: 80000, square: "10 ", status: "free" },
    2099: { price: 80000, square: "9 ", status: "free" },
    2098: { price: 80000, square: "10 ", status: "free" },
    2184: { price: 80000, square: "10 ", status: "free" },
    2097: { price: 80000, square: "10 ", status: "free" },
    2185: { price: 80000, square: "10 ", status: "free" },
    2096: { price: 80000, square: "10 ", status: "booked" },
    2187: { price: 80000, square: "10 ", status: "free" },
    2095: { price: 80000, square: "10 ", status: "free" },
    2188: { price: 80000, square: "10 ", status: "free" },
    2094: { price: 80000, square: "10 ", status: "free" },
    2189: { price: 80000, square: "10 ", status: "free" },
    2093: { price: 80000, square: "10 ", status: "free" },
    2190: { price: 80000, square: "10 ", status: "free" },
    2091: { price: 80000, square: "10 ", status: "free" },
    2090: { price: 80000, square: "10 ", status: "free" },
    2191: { price: 80000, square: "10 ", status: "free" },
    2192: { price: 80000, square: "10 ", status: "free" },
    2089: { price: 80000, square: "10 ", status: "free" },
    2193: { price: 80000, square: "10 ", status: "free" },
    2088: { price: 80000, square: "10 ", status: "free" },
    2169: { price: 80000, square: "11 ", status: "free" },
    2168: { price: 80000, square: "10 ", status: "free" },
    2167: { price: 80000, square: "10 ", status: "free" },
    2166: { price: 80000, square: "10 ", status: "free" },
    2165: { price: 80000, square: "10 ", status: "free" },
    2163: { price: 80000, square: "10 ", status: "free" },
    2162: { price: 80000, square: "10 ", status: "free" },
    2161: { price: 80000, square: "10 ", status: "free" },
    2160: { price: 80000, square: "12 ", status: "free" },
    2159: { price: 80000, square: "12 ", status: "free" },
    2158: { price: 80000, square: "12 ", status: "free" },
    2157: { price: 80000, square: "12 ", status: "free" },
    2156: { price: 80000, square: "12 ", status: "free" },
    2155: { price: 80000, square: "12 ", status: "free" },
    2154: { price: 80000, square: "12 ", status: "free" },
    2151: { price: 80000, square: "12 ", status: "free" },
    2152: { price: 80000, square: "10 ", status: "free" },
    2150: { price: 80000, square: "12 ", status: "free" },
    2149: { price: 80000, square: "10 ", status: "free" },
    2147: { price: 80000, square: "12,6 ", status: "free" },
    2148: { price: 80000, square: "9 ", status: "free" },
    2146: { price: 80000, square: "12 ", status: "free" },
    2145: { price: 80000, square: "12 ", status: "free" },
    2144: { price: 80000, square: "12 ", status: "free" },
    2143: { price: 80000, square: "12 ", status: "free" },
    2141: { price: 80000, square: "12 ", status: "free" },
    2140: { price: 80000, square: "8 ", status: "free" },
    2138: { price: 80000, square: "9,5 ", status: "free" },
    2139: { price: 80000, square: "11,4 ", status: "free" },
    2137: { price: 80000, square: "12 ", status: "free" },
    2135: { price: 80000, square: "8 ", status: "free" },
    2136: { price: 80000, square: "8 ", status: "free" },
    2134: { price: 80000, square: "8 ", status: "free" },
    2133: { price: 80000, square: "8 ", status: "free" },
    2132: { price: 80000, square: "12 ", status: "free" },
    2130: { price: 80000, square: "12 ", status: "free" },
    2123: { price: 80000, square: "12 ", status: "free" },
    2124: { price: 80000, square: "9 ", status: "free" },
    2125: { price: 80000, square: "9 ", status: "free" },
    2126: { price: 80000, square: "9 ", status: "free" },
    2127: { price: 80000, square: "9 ", status: "free" },
    2128: { price: 80000, square: "8 ", status: "free" },
    2129: { price: 80000, square: "8 ", status: "free" },
    2122: { price: 80000, square: "9,6 ", status: "free" },
    2121: { price: 80000, square: "8 ", status: "free" },
    2119: { price: 80000, square: "8 ", status: "free" },
    2118: { price: 80000, square: "8 ", status: "free" },
    2117: { price: 80000, square: "8 ", status: "free" },
    2116: { price: 80000, square: "8 ", status: "free" },
    2115: { price: 80000, square: "8 ", status: "free" },
    2114: { price: 80000, square: "8,35 ", status: "free" },
    2113: { price: 80000, square: "10 ", status: "free" },
    2103: { price: 80000, square: "8 ", status: "free" },
    2092: { price: 80000, square: "8 ", status: "free" },
    2081: { price: 80000, square: "8 ", status: "free" },
    2197: { price: 80000, square: "8 ", status: "free" },
    2186: { price: 80000, square: "8 ", status: "free" },
    2175: { price: 80000, square: "8 ", status: "free" },
    2164: { price: 80000, square: "8 ", status: "free" },
    2153: { price: 80000, square: "8 ", status: "free" },
    2142: { price: 80000, square: "8 ", status: "free" },
    2131: { price: 80000, square: "8 ", status: "free" },
    2120: { price: 80000, square: "8 ", status: "free" },
    2109: { price: 80000, square: "8 ", status: "free" },
    2087: { price: 80000, square: "10 ", status: "free" },
    2194: { price: 80000, square: "10 ", status: "free" },
    2195: { price: 80000, square: "10 ", status: "free" },
    2086: { price: 80000, square: "10 ", status: "free" },
    2196: { price: 80000, square: "10 ", status: "free" },
    2085: { price: 80000, square: "10 ", status: "free" },
    2198: { price: 80000, square: "10 ", status: "free" },
    2084: { price: 80000, square: "10 ", status: "free" },
    2199: { price: 80000, square: "10 ", status: "free" },
    2083: { price: 80000, square: "10 ", status: "free" },
    2200: { price: 80000, square: "10 ", status: "free" },
    2082: { price: 80000, square: "10 ", status: "free" },
    2201: { price: 80000, square: "10 ", status: "free" },
    2202: { price: 80000, square: "10 ", status: "free" },
    2207: { price: 80000, square: "10 ", status: "free" },
    2206: { price: 80000, square: "10 ", status: "free" },
    2205: { price: 80000, square: "10 ", status: "free" },
    2204: { price: 80000, square: "8 ", status: "free" },
    2203: { price: 80000, square: "10 ", status: "free" },
    2181: { price: 80000, square: "9 ", status: "free" },
    2180: { price: 80000, square: "10 ", status: "free" },
    2179: { price: 80000, square: "9 ", status: "free" },
    2170: { price: 80000, square: "8 ", status: "free" },
    2178: { price: 80000, square: "9 ", status: "free" },
    2171: { price: 80000, square: "8 ", status: "free" },
    2177: { price: 80000, square: "9 ", status: "free" },
    2172: { price: 80000, square: "8 ", status: "free" },
    2176: { price: 80000, square: "9 ", status: "free" },
    2174: { price: 80000, square: "10 ", status: "free" },
    2173: { price: 80000, square: "9 ", status: "free" },
  });


  function setMapStates(event) {
    let id = event.target.getAttribute("data-idx");
    setPlotNumber(id);
    setPrice(plots[id].price);
    setSquare(plots[id].square);
    setStatus(plots[id].status);
  }

  function calculatePopupPosition(event) {
    let left = 0;
    let top = 0;
    let matchMeidaFactor = 1;

    let imageWidth = 1600;
    let imageHeight = 700;

    let popupWidth = 315;
    let popupHeight = 315;

    const pathBBox = event.target.getBBox();
    left = Math.round(pathBBox.x + 15 + pathBBox.width / 2);
    top = Math.round(pathBBox.y + pathBBox.height / 2);

    if (window.matchMedia("(max-width: 550px)").matches) {
      matchMeidaFactor = 5 / 7;
      imageWidth = imageWidth * matchMeidaFactor;
      imageHeight = imageHeight * matchMeidaFactor;
      left *= matchMeidaFactor;
      top *= matchMeidaFactor;
      popupWidth = 250;
      popupHeight = 240;
    }

    if (top > imageHeight - popupHeight) {
      top -= popupHeight;
      popup.current.classList.add("bottom");
    } else {
      popup.current.classList.add("top");
    }
    if (left > imageWidth - popupWidth) {
      left = left - popupWidth - 30;
      popup.current.classList.add("right");
    } else {
      popup.current.classList.add("left");
    }

    return [left + "px", top + "px"];
  }

  function setPopupPosition(event) {
    let coordinates = calculatePopupPosition(event);

    popup.current.style.left = coordinates[0];
    popup.current.style.top = coordinates[1];
  }

  function handleMapClick(event) {
    if (event.target.tagName === "path") {
      setMapStates(event);
      popup.current.classList.remove("top", "left", "bottom", "right");
      setPopupPosition(event);

      if (!popup.current.matches(".open")) {
        popup.current.classList.add("open");
      }
    }
  }

  function closePopup() {
    popup.current.classList.remove("open");
  }

  async function handleSubmit(name, phone) {
    const serviceId = "service_hbka887";
    const templateId = "template_uhy61b9";
    const publicKey = "pWywIb_GtxShQ0YCY";

    let message = `Просмотр участка: ${plotNumber}\nИмя: ${name}\nКонтакт: ${phone}`;

    let template_params = {
      title: "Просмотр участка",
      from_email: "info@дачное-местечко.рф",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, template_params, publicKey)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          toast.success("Спасибо! Вам перезвонят в ближайшее время.", {
            theme: "colored",
          });
        } else {
          toast.error("Что-то пошло не так, повторите попытку позже.", {
            theme: "colored",
          });
        }
      })
      .catch((e) => {
        toast.error("Что-то пошло не так, повторите попытку позже.", {
          theme: "colored",
        });
      });
  }

  async function handleEntry(e) {
    e.preventDefault();

    let name = popup.current.querySelector(".Popup-inputName").value;
    let phone = popup.current.querySelector(".Popup-inputPhone").value;
    var phoneo = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    if (name === "" || phone === "") {
      toast.error("Пожалуйста, заполните все необходимые поля.", {
        theme: "colored",
      });
    } else if (phone.match(phoneo) == null) {
      toast.error("Пожалуйста, введите корректный номер телефона.", {
        theme: "colored",
      });
    } else {
      popup.current.querySelector(".Popup-inputName").value = "";
      popup.current.querySelector(".Popup-inputPhone").value = "";
      closePopup();
      toast.info("Запрос обрабатывается.", {
        theme: "colored",
      });
      handleSubmit(name, phone);
    }
  }

  return (
    <div className="Map" id="Map">
      <div className="Map-content">
        <div className="Map-title">КАРТА УЧАСТКОВ</div>
        <div className="Map-container">
          <div className="Map-imageWrapper">
            <img
              className="Map-image"
              src={process.env.PUBLIC_URL + "/images/map.webp"}
              draggable="false"
              alt="map"
            ></img>
            <img
              className="Map-numbers"
              src={process.env.PUBLIC_URL + "/images/numbers.webp"}
              alt="numbers"
            ></img>
            <form
              className="Map-popUp Popup"
              ref={popup}
              onSubmit={handleEntry}
              id="Map-form"
            >
              <div className="Popup-content">
                <div className="Popup-close" onClick={closePopup}></div>
                <div className="Popup-title">
                  Участок&nbsp;
                  <div className={"Popup-variable " + status}>
                    №{plotNumber}&nbsp;-&nbsp;
                    {status === "free"
                      ? "Свободен"
                      : status === "booked"
                      ? "Забронирован"
                      : status === "sold"
                      ? "Продан"
                      : ""}
                  </div>
                </div>
                <div className="Popup-price Popup-description">
                  Цена за сотку:&nbsp;<div className="Popup-variable">{price} руб.</div>
                </div>
                <div className="Popup-square Popup-description">
                  Площадь:&nbsp;
                  <div className="Popup-variable">
                    {square.toString().replace(".00", "")} сот.
                  </div>
                </div>
                <input
                  className={"Popup-inputName Popup-input " + status}
                  placeholder="Как к вам обращаться?"
                />
                <input
                  className={"Popup-inputPhone Popup-input " + status}
                  placeholder="Мобильный телефон"
                />
                <button
                  className={"Popup-sendButton Popup-input " + status}
                  type="submit"
                >
                  Записаться на просмотр
                </button>
              </div>
            </form>
            <svg
              viewBox="0 0 1600 700"
              className="Map-svgContainer"
              onClick={handleMapClick}
            >
              <path
                data-idx="2182"
                className={plots["2182"]?.status}
                d="M 312.701 351.305 L 300.956 361.895 L 301.341 431.018 L 360.837 415.037 L 359.49 339.367 L 312.701 351.305 Z"
              ></path>
              <path
                data-idx="2183"
                className={plots["2183"]?.status}
                d="M 360.272 339.018 L 361.808 414.81 L 426.138 396.667 L 421.49 323.853 L 360.272 339.018 Z"
              ></path>
              <path
                data-idx="2099"
                className={plots["2099"]?.status}
                d="M 301.448 431.729 L 301.141 508.514 L 322.523 509.464 L 362.847 497.296 L 360.614 415.989 L 301.448 431.729 Z"
              ></path>
              <path
                data-idx="2098"
                className={plots["2098"]?.status}
                d="M 361.531 415.621 L 363.881 497.089 L 432.527 476.623 L 426.278 397.465 L 361.531 415.621 Z"
              ></path>
              <path
                data-idx="2184"
                className={plots["2184"]?.status}
                d="M 422.185 323.72 L 480.932 308.368 L 491.14 379.028 L 427.068 396.451 L 422.185 323.72 Z"
              ></path>
              <path
                data-idx="2097"
                className={plots["2097"]?.status}
                d="M 427.092 397.315 L 491.312 379.97 L 502.814 456.704 L 433.432 476.277 L 427.092 397.315 Z"
              ></path>
              <path
                data-idx="2185"
                className={plots["2185"]?.status}
                d="M 481.85 308.142 L 539.125 293.975 L 552.6 362.349 L 492.172 378.626 L 481.85 308.142 Z"
              ></path>
              <path
                data-idx="2096"
                className={plots["2096"]?.status}
                d="M 492.043 379.448 L 503.697 456.641 L 567.059 437.434 L 552.678 363.035 L 492.043 379.448 Z"
              ></path>
              <path
                data-idx="2187"
                className={plots["2187"]?.status}
                d="M 539.887 293.839 L 593.98 279.467 L 611.901 345.818 L 553.519 362.696 L 539.887 293.839 Z"
              ></path>
              <path
                data-idx="2095"
                className={plots["2095"]?.status}
                d="M 553.553 363.217 L 612.197 346.422 L 631.755 418.351 L 567.855 437.165 L 553.553 363.217 Z"
              ></path>
              <path
                data-idx="2188"
                className={plots["2188"]?.status}
                d="M 594.651 279.225 L 650.168 264.788 L 669.76 329.431 L 612.591 345.617 L 594.651 279.225 Z"
              ></path>
              <path
                data-idx="2094"
                className={plots["2094"]?.status}
                d="M 612.812 346.198 L 632.666 418.094 L 690.898 401.162 L 670.004 330.23 L 612.812 346.198 Z"
              ></path>
              <path
                data-idx="2189"
                className={plots["2189"]?.status}
                d="M 650.768 264.569 L 701.202 251.722 L 725.132 314.097 L 670.704 329.206 L 650.768 264.569 Z"
              ></path>
              <path
                data-idx="2093"
                className={plots["2093"]?.status}
                d="M 670.693 329.884 L 725.321 314.852 L 751.276 383.7 L 691.722 400.913 L 670.693 329.884 Z"
              ></path>
              <path
                data-idx="2190"
                className={plots["2190"]?.status}
                d="M 701.894 251.558 L 754.153 238.247 L 781.183 298.896 L 725.921 313.915 L 701.894 251.558 Z"
              ></path>
              <path
                data-idx="2091"
                className={plots["2091"]?.status}
                d="M 726.015 314.601 L 752.062 383.384 L 811.11 365.96 L 781.393 299.606 L 726.015 314.601 Z"
              ></path>
              <path
                data-idx="2090"
                className={plots["2090"]?.status}
                d="M 812.012 365.833 L 866.718 349.915 L 833.961 285.293 L 782.001 299.323 L 812.012 365.833 Z"
              ></path>
              <path
                data-idx="2191"
                className={plots["2191"]?.status}
                d="M 781.789 298.7 L 754.815 238 L 803.812 225.456 L 833.541 284.433 L 781.789 298.7 Z"
              ></path>
              <path
                data-idx="2192"
                className={plots["2192"]?.status}
                d="M 804.42 225.35 L 853.341 212.86 L 884.984 270.524 L 834.397 284.471 L 804.42 225.35 Z"
              ></path>
              <path
                data-idx="2089"
                className={plots["2089"]?.status}
                d="M 834.606 284.888 L 885.192 271.148 L 919.332 334.017 L 867.558 349.569 L 834.606 284.888 Z"
              ></path>
              <path
                data-idx="2193"
                className={plots["2193"]?.status}
                d="M 853.888 212.728 L 892.797 202.316 L 903.209 205.878 L 934.171 256.843 L 885.65 270.395 L 853.888 212.728 Z"
              ></path>
              <path
                data-idx="2088"
                className={plots["2088"]?.status}
                d="M 886.03 271.132 L 934.684 257.677 L 968.877 314.906 L 963.243 321.713 L 920.198 333.7 L 886.03 271.132 Z"
              ></path>
              <path
                data-idx="2169"
                className={plots["2169"]?.status}
                d="M 347.206 323.282 L 346.814 311.924 L 450.797 249.456 L 492.972 286.516 L 347.206 323.282 Z"
              ></path>
              <path
                data-idx="2168"
                className={plots["2168"]?.status}
                d="M 493.847 286.259 L 506.074 283.824 L 547.047 255.079 L 503.483 217.577 L 451.392 249.126 L 493.847 286.259 Z"
              ></path>
              <path
                data-idx="2167"
                className={plots["2167"]?.status}
                d="M 504.283 217.161 L 551.02 188.443 L 595.975 222.738 L 547.764 254.434 L 504.283 217.161 Z"
              ></path>
              <path
                data-idx="2166"
                className={plots["2166"]?.status}
                d="M 551.891 187.93 L 596.371 160.702 L 641.286 193.299 L 596.552 222.287 L 551.891 187.93 Z"
              ></path>
              <path
                data-idx="2165"
                className={plots["2165"]?.status}
                d="M 597.142 160.184 L 641.997 192.805 L 684.555 165.671 L 641.292 134.364 L 597.142 160.184 Z"
              ></path>
              <path
                data-idx="2163"
                className={plots["2163"]?.status}
                d="M 641.809 133.858 L 685.445 165.185 L 726.149 138.482 L 681.277 109.501 C 681.277 109.501 641.809 133.728 641.809 133.858 Z"
              ></path>
              <path
                data-idx="2162"
                className={plots["2162"]?.status}
                d="M 726.926 138.139 L 763.807 114.079 L 719.112 86.317 L 681.998 109.058 L 726.926 138.139 Z"
              ></path>
              <path
                data-idx="2161"
                className={plots["2161"]?.status}
                d="M 764.57 113.699 C 764.57 113.699 795.093 94.046 795.184 94.046 C 795.275 94.046 759.956 61.636 759.956 61.636 L 719.92 85.676 L 764.57 113.699 Z"
              ></path>
              <path
                data-idx="2160"
                className={plots["2160"]?.status}
                d="M 795.933 93.767 L 820.978 96.266 L 833.269 54.587 L 780.685 48.857 L 760.723 61.148 L 795.933 93.767 Z"
              ></path>
              <path
                data-idx="2159"
                className={plots["2159"]?.status}
                d="M 821.818 96.351 L 875.991 102.828 L 885.087 60.418 L 834.019 54.593 L 821.818 96.351 Z"
              ></path>
              <path
                data-idx="2158"
                className={plots["2158"]?.status}
                d="M 876.627 102.924 L 930.261 109.146 L 937.531 66.196 L 885.89 60.43 L 876.627 102.924 Z"
              ></path>
              <path
                data-idx="2157"
                className={plots["2157"]?.status}
                d="M 938.128 66.148 L 930.933 109.444 L 986.775 115.955 L 990.122 72.454 L 938.128 66.148 Z"
              ></path>
              <path
                data-idx="2156"
                className={plots["2156"]?.status}
                d="M 987.503 116.265 L 1045.256 123.061 L 1045.502 78.216 L 990.868 72.567 L 987.503 116.265 Z"
              ></path>
              <path
                data-idx="2155"
                className={plots["2155"]?.status}
                d="M 1046.133 78.485 L 1046 123.058 L 1114.101 131.186 L 1087.927 83.466 L 1046.133 78.485 Z"
              ></path>
              <path
                data-idx="2154"
                className={plots["2154"]?.status}
                d="M 1088.678 83.282 L 1116.708 67.47 L 1166.139 117.425 L 1115.111 131.16 L 1088.678 83.282 Z"
              ></path>
              <path
                data-idx="2151"
                className={plots["2151"]?.status}
                d="M 1117.479 67.032 L 1160.597 43.206 L 1189.948 70.214 L 1199.731 69.801 L 1206.759 76.828 L 1142.793 92.747 L 1117.479 67.032 Z"
              ></path>
              <path
                data-idx="2152"
                className={plots["2152"]?.status}
                d="M 1143.178 93.301 L 1167.133 117.28 L 1227.724 103.899 L 1227.903 95.463 L 1207.174 77.426 L 1143.178 93.301 Z"
              ></path>
              <path
                data-idx="2150"
                className={plots["2150"]?.status}
                d="M 1161.168 42.761 L 1207.859 16.619 L 1245.139 24.51 L 1258.834 36.161 L 1176.124 56.258 L 1161.168 42.761 Z"
              ></path>
              <path
                data-idx="2149"
                className={plots["2149"]?.status}
                d="M 1198.387 51.682 L 1222.113 73.232 L 1284.078 57.771 L 1259.309 36.631 L 1198.387 51.682 Z"
              ></path>
              <path
                data-idx="2147"
                className={plots["2147"]?.status}
                d="M 1246.073 24.395 L 1285.347 32.38 L 1360.749 73.36 L 1317.186 84.58 L 1246.073 24.395 Z"
              ></path>
              <path
                data-idx="2148"
                className={plots["2148"]?.status}
                d="M 1222.684 73.75 L 1284.893 58.238 L 1306.513 76.4 L 1283.057 81.369 L 1290.032 88.534 L 1259.219 96.226 L 1243.406 93.455 L 1222.684 73.75 Z"
              ></path>
              <path
                data-idx="2146"
                className={plots["2146"]?.status}
                d="M 1318.088 85.221 L 1362.651 121.418 L 1418.603 105.266 L 1361.838 73.891 L 1318.088 85.221 Z"
              ></path>
              <path
                data-idx="2145"
                className={plots["2145"]?.status}
                d="M 1363.047 121.908 L 1402.182 153.489 L 1470.275 132.925 L 1420.018 105.541 L 1363.047 121.908 Z"
              ></path>
              <path
                data-idx="2144"
                className={plots["2144"]?.status}
                d="M 1402.602 154.095 L 1436.071 181.479 L 1516.754 157.872 L 1471.744 133.321 L 1402.602 154.095 Z"
              ></path>
              <path
                data-idx="2143"
                className={plots["2143"]?.status}
                d="M 1436.491 181.98 L 1507.626 240.526 L 1522.84 160.787 L 1517.489 158.478 L 1436.491 181.98 Z"
              ></path>
              <path
                data-idx="2141"
                className={plots["2141"]?.status}
                d="M 1453.738 197.239 L 1406.555 213.382 C 1406.555 213.382 1497.942 295.231 1498.149 295.231 C 1498.356 295.231 1507.338 241.12 1507.338 241.12 L 1453.738 197.239 Z"
              ></path>
              <path
                data-idx="2140"
                className={plots["2140"]?.status}
                d="M 1405.777 213.696 L 1373.043 223.655 L 1438.121 283.682 L 1471.326 272.577 L 1405.777 213.696 Z"
              ></path>
              <path
                data-idx="2138"
                className={plots["2138"]?.status}
                d="M 1472.001 273.257 L 1497.874 296.096 L 1492.86 327.83 L 1433.715 344.498 L 1389.237 299.925 L 1472.001 273.257 Z"
              ></path>
              <path
                data-idx="2139"
                className={plots["2139"]?.status}
                d="M 1401.142 295.353 L 1376.856 271.829 L 1366.189 274.495 C 1366.189 274.495 1334.569 244.209 1334.569 244.113 C 1334.569 244.017 1334.76 234.875 1334.76 234.875 L 1372.094 224.017 L 1436.953 283.734 L 1401.142 295.353 Z"
              ></path>
              <path
                data-idx="2137"
                className={plots["2137"]?.status}
                d="M 1388.383 300.248 L 1432.917 344.972 L 1340.918 372.903 L 1299.912 328.485 L 1388.383 300.248 Z"
              ></path>
              <path
                data-idx="2135"
                className={plots["2135"]?.status}
                d="M 1240.921 262.837 L 1299.557 327.912 L 1337.29 315.791 L 1275.394 251.711 L 1240.921 262.837 Z"
              ></path>
              <path
                data-idx="2136"
                className={plots["2136"]?.status}
                d="M 1276.205 251.462 L 1303.16 243.225 L 1317.885 248.654 L 1373.417 304.045 L 1338.164 315.479 L 1276.205 251.462 Z"
              ></path>
              <path
                data-idx="2134"
                className={plots["2134"]?.status}
                d="M 1240.135 263.054 L 1203.988 273.314 L 1260.874 341.455 L 1298.711 328.271 L 1240.135 263.054 Z"
              ></path>
              <path
                data-idx="2133"
                className={plots["2133"]?.status}
                d="M 1203.174 273.655 L 1174.651 281.358 L 1170.747 291.05 L 1222.036 353.916 L 1260.119 341.629 L 1203.174 273.655 Z"
              ></path>
              <path
                data-idx="2132"
                className={plots["2132"]?.status}
                d="M 1222.442 354.571 L 1282.972 429.345 L 1326.612 376.335 L 1339.819 373.033 L 1299.125 329.037 L 1222.442 354.571 Z"
              ></path>
              <path
                data-idx="2130"
                className={plots["2130"]?.status}
                d="M 1282.645 429.577 L 1267.49 411.003 L 1237.898 422.037 L 1213.567 392.809 L 1163.865 409.278 L 1250.954 527.375 L 1267.125 445.923 L 1282.645 429.577 Z"
              ></path>
              <path
                data-idx="2123"
                className={plots["2123"]?.status}
                d="M 1250.605 528.089 L 1214.592 479.561 L 1132.611 509.394 L 1191.285 600.212 L 1236.198 598.56 L 1250.605 528.089 Z"
              ></path>
              <path
                data-idx="2124"
                className={plots["2124"]?.status}
                d="M 1214.227 478.82 L 1177.376 428.999 L 1087.165 460.416 L 1110.437 497.382 L 1123.164 494.723 L 1132.246 508.618 L 1214.227 478.82 Z"
              ></path>
              <path
                data-idx="2125"
                className={plots["2125"]?.status}
                d="M 1086.6 459.705 L 1176.957 428.322 L 1145.358 385.987 L 1057.882 414.78 L 1086.6 459.705 Z"
              ></path>
              <path
                data-idx="2126"
                className={plots["2126"]?.status}
                d="M 1144.824 385.203 L 1115.756 346.505 L 1030.175 371.904 L 1057.633 414.103 L 1144.824 385.203 Z"
              ></path>
              <path
                data-idx="2127"
                className={plots["2127"]?.status}
                d="M 1029.84 371.235 L 1010.284 340.675 L 1016.239 328.914 L 1086.579 307.849 L 1115.237 345.811 L 1029.84 371.235 Z"
              ></path>
              <path
                data-idx="2128"
                className={plots["2128"]?.status}
                d="M 1087.28 307.77 L 1137.251 292.6 L 1152.283 297.543 L 1184.064 337.492 L 1124.689 357.192 L 1087.28 307.77 Z"
              ></path>
              <path
                data-idx="2129"
                className={plots["2129"]?.status}
                d="M 1213.683 391.913 L 1224.254 388.03 L 1184.751 338.16 L 1125.16 357.844 L 1163.121 408.458 L 1213.683 391.913 Z"
              ></path>
              <path
                data-idx="2122"
                className={plots["2122"]?.status}
                d="M 1145.036 529.856 L 1025.306 571.199 L 1043.806 608.004 L 1190.324 600.222 L 1145.036 529.856 Z"
              ></path>
              <path
                data-idx="2121"
                className={plots["2121"]?.status}
                d="M 1024.67 570.429 L 995.903 513.409 L 1074.849 485.578 L 1110.024 541.251 L 1024.67 570.429 Z"
              ></path>
              <path
                data-idx="2119"
                className={plots["2119"]?.status}
                d="M 995.493 512.508 L 1074.735 484.707 L 1041.87 431.317 L 965.79 457.174 L 995.493 512.508 Z"
              ></path>
              <path
                data-idx="2118"
                className={plots["2118"]?.status}
                d="M 1041.487 430.701 L 1012.439 383.445 L 939.568 406.275 L 965.644 456.289 L 1041.487 430.701 Z"
              ></path>
              <path
                data-idx="2117"
                className={plots["2117"]?.status}
                d="M 939.355 405.528 L 915.951 359.148 L 975.174 341.606 L 988.854 345.469 L 1012.055 382.701 L 939.355 405.528 Z"
              ></path>
              <path
                data-idx="2116"
                className={plots["2116"]?.status}
                d="M 915.345 359.243 L 849.256 378.64 L 843.332 392.229 L 862.032 430.907 L 938.897 406.419 L 915.345 359.243 Z"
              ></path>
              <path
                data-idx="2115"
                className={plots["2115"]?.status}
                d="M 939.153 406.968 L 862.325 431.74 L 886.68 482.673 L 965.054 456.97 L 939.153 406.968 Z"
              ></path>
              <path
                data-idx="2114"
                className={plots["2114"]?.status}
                d="M 965.013 457.803 L 887.077 483.496 L 901.576 513.269 L 913.545 510.12 L 931.226 544.251 L 999.058 520.986 L 965.013 457.803 Z"
              ></path>
              <path
                data-idx="2113"
                className={plots["2113"]?.status}
                d="M 999.25 521.65 L 910.943 552.202 L 935.762 613.546 L 1042.84 607.91 L 999.25 521.65 Z"
              ></path>
              <path
                data-idx="2103"
                className={plots["2103"]?.status}
                d="M 935.057 613.656 L 844.856 617.765 L 816.64 553.827 L 880.043 531.136 L 893.35 557.75 L 910.14 552.57 L 935.057 613.656 Z"
              ></path>
              <path
                data-idx="2092"
                className={plots["2092"]?.status}
                d="M 879.696 530.423 L 816.344 553.101 L 784.292 478.727 L 847.286 458.256 L 879.696 530.423 Z"
              ></path>
              <path
                data-idx="2081"
                className={plots["2081"]?.status}
                d="M 790.806 475.914 L 762.945 404.555 L 806.537 391.478 L 821.036 397.448 L 846.813 457.435 L 790.806 475.914 Z"
              ></path>
              <path
                data-idx="2197"
                className={plots["2197"]?.status}
                d="M 726.142 495.993 L 790.289 476.049 L 762.206 404.877 L 702.509 422.363 L 726.142 495.993 Z"
              ></path>
              <path
                data-idx="2186"
                className={plots["2186"]?.status}
                d="M 701.875 422.396 L 642.796 440.332 L 661.772 516.76 L 725.243 496.315 L 701.875 422.396 Z"
              ></path>
              <path
                data-idx="2175"
                className={plots["2175"]?.status}
                d="M 642.2 440.64 L 581.019 458.541 L 596.217 537.569 L 661.039 516.892 L 642.2 440.64 Z"
              ></path>
              <path
                data-idx="2164"
                className={plots["2164"]?.status}
                d="M 580.389 458.829 L 516.675 477.967 L 527.531 559.575 L 595.249 537.813 L 580.389 458.829 Z"
              ></path>
              <path
                data-idx="2153"
                className={plots["2153"]?.status}
                d="M 515.995 478.255 L 448.788 497.791 L 457.006 581.314 L 526.524 560.023 L 515.995 478.255 Z"
              ></path>
              <path
                data-idx="2142"
                className={plots["2142"]?.status}
                d="M 447.882 498.026 L 382.211 517.822 L 385.585 604.191 L 456.183 581.515 L 447.882 498.026 Z"
              ></path>
              <path
                data-idx="2131"
                className={plots["2131"]?.status}
                d="M 381.274 518.148 L 307.897 539.516 L 309.351 628.442 L 384.82 604.528 L 381.274 518.148 Z"
              ></path>
              <path
                data-idx="2120"
                className={plots["2120"]?.status}
                d="M 307.124 539.849 L 237.87 560.503 L 234.8 652.301 L 308.441 628.439 L 307.124 539.849 Z"
              ></path>
              <path
                data-idx="2109"
                className={plots["2109"]?.status}
                d="M 237.019 560.741 L 177.083 579.099 L 141.732 680.248 L 234.237 652.509 L 237.019 560.741 Z"
              ></path>
              <path
                data-idx="2087"
                className={plots["2087"]?.status}
                d="M 989.623 307.964 L 1004.331 311.759 L 1044.028 299.423 L 1003.066 239.483 L 955.62 252.61 L 989.623 307.964 Z"
              ></path>
              <path
                data-idx="2194"
                className={plots["2194"]?.status}
                d="M 955.275 251.953 L 923.355 200.245 L 929.292 192.76 L 964.653 183.898 L 1002.423 238.618 L 955.275 251.953 Z"
              ></path>
              <path
                data-idx="2195"
                className={plots["2195"]?.status}
                d="M 965.193 183.604 L 1010.394 172.514 L 1050.121 225.928 L 1003.305 238.913 L 965.193 183.604 Z"
              ></path>
              <path
                data-idx="2086"
                className={plots["2086"]?.status}
                d="M 1093.522 284.958 L 1044.845 299.184 L 1003.882 239.367 L 1050.587 226.512 L 1093.522 284.958 Z"
              ></path>
              <path
                data-idx="2196"
                className={plots["2196"]?.status}
                d="M 1010.915 172.482 L 1054.19 161.495 L 1096.029 213.898 L 1050.894 226.069 L 1010.915 172.482 Z"
              ></path>
              <path
                data-idx="2085"
                className={plots["2085"]?.status}
                d="M 1094.117 284.762 L 1141.789 271.141 L 1096.332 214.525 L 1051.695 226.587 L 1094.117 284.762 Z"
              ></path>
              <path
                data-idx="2198"
                className={plots["2198"]?.status}
                d="M 1054.791 161.239 L 1096.3 150.444 L 1140.618 201.431 L 1096.827 214.069 L 1054.791 161.239 Z"
              ></path>
              <path
                data-idx="2084"
                className={plots["2084"]?.status}
                d="M 1142.327 270.906 L 1189.293 257.145 L 1141.065 202.225 L 1097.634 214.598 L 1142.327 270.906 Z"
              ></path>
              <path
                data-idx="2199"
                className={plots["2199"]?.status}
                d="M 1097.172 150.325 L 1139.046 139.826 L 1184.215 189.391 L 1141.61 201.477 L 1097.172 150.325 Z"
              ></path>
              <path
                data-idx="2083"
                className={plots["2083"]?.status}
                d="M 1233.048 244.026 L 1190.196 256.838 C 1190.196 256.838 1142.219 202.411 1142.334 202.411 C 1142.449 202.411 1184.674 190.1 1184.674 190.1 L 1233.048 244.026 Z"
              ></path>
              <path
                data-idx="2200"
                className={plots["2200"]?.status}
                d="M 1139.869 139.635 L 1179.999 129.603 L 1227.011 177.548 L 1185.248 189.447 L 1139.869 139.635 Z"
              ></path>
              <path
                data-idx="2082"
                className={plots["2082"]?.status}
                d="M 1227.75 178.289 L 1278.951 230.865 L 1233.772 243.747 L 1185.952 190.124 L 1227.75 178.289 Z"
              ></path>
              <path
                data-idx="2201"
                className={plots["2201"]?.status}
                d="M 1180.994 129.355 L 1220.36 119.709 L 1268.242 166.896 L 1228.616 177.845 L 1180.994 129.355 Z"
              ></path>
              <path
                data-idx="2202"
                className={plots["2202"]?.status}
                d="M 1221.076 119.444 L 1258.808 109.505 L 1308.346 155.827 L 1268.931 166.747 L 1221.076 119.444 Z"
              ></path>
              <path
                data-idx="2207"
                className={plots["2207"]?.status}
                d="M 1279.64 230.655 L 1321.622 218.739 L 1268.813 167.336 L 1229.069 178.421 L 1279.64 230.655 Z"
              ></path>
              <path
                data-idx="2206"
                className={plots["2206"]?.status}
                d="M 1269.559 167.278 L 1309.085 156.484 L 1364.129 206.042 L 1322.256 218.533 L 1269.559 167.278 Z"
              ></path>
              <path
                data-idx="2205"
                className={plots["2205"]?.status}
                d="M 1364.829 205.689 L 1415.421 191.395 L 1416.304 185.854 L 1379.525 154.857 L 1325.641 170.516 L 1364.829 205.689 Z"
              ></path>
              <path
                data-idx="2204"
                className={plots["2204"]?.status}
                d="M 1324.929 169.839 L 1378.854 154.176 L 1347.46 127.523 L 1295.252 142.567 L 1324.929 169.839 Z"
              ></path>
              <path
                data-idx="2203"
                className={plots["2203"]?.status}
                d="M 1259.476 109.248 L 1303.889 98.101 L 1316.541 100.578 L 1346.884 127.036 L 1294.688 141.895 L 1259.476 109.248 Z"
              ></path>
              <path
                data-idx="2181"
                className={plots["2181"]?.status}
                d="M 630.54 251.982 L 694.592 235.97 L 677.883 190.368 L 622.882 226.571 L 630.54 251.982 Z"
              ></path>
              <path
                data-idx="2180"
                className={plots["2180"]?.status}
                d="M 695.321 235.81 L 743.751 223.579 L 717.218 163.904 L 678.355 189.846 L 695.321 235.81 Z"
              ></path>
              <path
                data-idx="2179"
                className={plots["2179"]?.status}
                d="M 744.639 223.382 L 792.182 211.151 L 769.594 163.806 L 723.235 175.741 L 744.639 223.382 Z"
              ></path>
              <path
                data-idx="2170"
                className={plots["2170"]?.status}
                d="M 717.81 163.51 L 778.57 123.069 L 796.607 156.525 L 723.136 175.05 L 717.81 163.51 Z"
              ></path>
              <path
                data-idx="2178"
                className={plots["2178"]?.status}
                d="M 792.814 211.088 L 839.512 199.584 L 814.288 152.46 L 770.349 163.825 L 792.814 211.088 Z"
              ></path>
              <path
                data-idx="2171"
                className={plots["2171"]?.status}
                d="M 779.178 122.72 L 797.292 156.424 L 838.058 146.451 L 819.811 108.952 L 802.685 107.161 L 779.178 122.72 Z"
              ></path>
              <path
                data-idx="2177"
                className={plots["2177"]?.status}
                d="M 815.326 152.692 L 840.144 199.337 L 884.109 188.457 L 857.444 142.262 L 815.326 152.692 Z"
              ></path>
              <path
                data-idx="2172"
                className={plots["2172"]?.status}
                d="M 820.697 109.109 L 891.869 118.397 L 900.385 131.24 L 838.644 145.917 L 820.697 109.109 Z"
              ></path>
              <path
                data-idx="2176"
                className={plots["2176"]?.status}
                d="M 858.269 142.072 L 900.846 132.06 L 929.958 177.091 L 884.859 188.474 L 858.269 142.072 Z"
              ></path>
              <path
                data-idx="2174"
                className={plots["2174"]?.status}
                d="M 892.895 118.447 L 941.774 124.822 L 970.027 166.826 L 930.638 176.856 L 892.895 118.447 Z"
              ></path>
              <path
                data-idx="2173"
                className={plots["2173"]?.status}
                d="M 970.807 166.555 L 1021.66 153.705 L 1002.695 132.493 L 942.926 125.027 L 970.807 166.555 Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
