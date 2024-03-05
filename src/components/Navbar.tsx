import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import {
  faHouseChimney,
  faBookSkull,
  faHeadSideVirus,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

import { GiAngelWings } from "react-icons/gi";

function Navbar() {
  const home_icon = <FontAwesomeIcon icon={faHouseChimney} />;
  const book_icon = <FontAwesomeIcon icon={faBookSkull} />;
  const author_icon = <FontAwesomeIcon icon={faHeadSideVirus} />;
  const login_icon = <FontAwesomeIcon icon={faRightToBracket} />;

  const { t } = useTranslation();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {t("project_title")} <GiAngelWings />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {t("home")} {home_icon}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/author/">
                {t("authors")} {author_icon}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/book/list/">
                {t("book_list")} {book_icon}
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="btn btn-secondary" href="/user/login">
                {login_icon} {t("login")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
