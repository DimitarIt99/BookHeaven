import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faBookSkull,
  faHeadSideVirus,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const home_icon = <FontAwesomeIcon icon={faHouseChimney} />;
  const book_icon = <FontAwesomeIcon icon={faBookSkull} />;
  const author_icon = <FontAwesomeIcon icon={faHeadSideVirus} />;
  const login_icon = <FontAwesomeIcon icon={faRightToBracket} />;

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          BookHeaven
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
                Home {home_icon}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/author/">
                Authors {author_icon}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/book/list/">
                BooksList {book_icon}
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="btn btn-secondary" href="/user/login">
                {login_icon} Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
