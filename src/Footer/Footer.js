import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-content">
        <a className="Phone-number" href="tel:+78005005523">
          <div className="Phone-numberText Footer-phone">+7 800 500 55 23</div>
        </a>
        <a className="Footer-Mail" href="mailto:info@дачное-местечко.рф">
          <div className="Footer-mail">info@дачное-местечко.рф</div>
        </a>
        {/* <div className="Footer-socials">
          <div className="Footer-iconContainer">
            <a className="Foote-socialLink" href="">
              <img
                src={process.env.PUBLIC_URL + "/icons/instagram.png"}
                className="Footer-icon"
                alt="инстаграм"
              ></img>
            </a>
          </div>
          <div className="Footer-iconContainer">
            <a className="Foote-socialLink" href="">
              <img
                src={process.env.PUBLIC_URL + "/icons/vkontakte.png"}
                className="Footer-icon"
                alt="вконтакте"
              ></img>
            </a>
          </div>
          <div className="Footer-iconContainer">
            <a className="Foote-socialLink" href="">
              <img
                src={process.env.PUBLIC_URL + "/icons/youtube.png"}
                className="Footer-icon"
                alt="ютуб"
              ></img>
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}
