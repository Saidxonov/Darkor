import "./index.css";
import Logo from "../../images/header-logo.svg";
import Arrow from "../../images/arrow-right.svg";

function Header() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="header">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="types">
              <ul>
                <li>
                  <a href="#">Vakansiyalar</a>
                </li>
                <li>
                  <a href="#">Kandidatlar</a>
                </li>
                <li>
                  <a href="#">Kompaniyalar</a>
                </li>
                <li>
                  <a href="#">Xizmatlar</a>
                </li>
                <li>
                  <a href="#">Ta’lim</a>
                </li>
              </ul>
            </div>
            <div className="language">
              <div className="uzb">
                <p>O’zb</p>
                <img className="arrow" src={Arrow} alt="" />
              </div>
              <button className="header-btn">Boshlash</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
