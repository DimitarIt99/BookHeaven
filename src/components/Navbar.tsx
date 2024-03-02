import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faBookSkull,
  faHeadSideVirus,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  // This is just a dummy test for navbar. TODO Implement me later

  const home_icon = <FontAwesomeIcon icon={faHouseChimney} />;
  const book_icon = <FontAwesomeIcon icon={faBookSkull} />;
  const author_icon = <FontAwesomeIcon icon={faHeadSideVirus} />;

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
      </div>
    </nav>
  );
}

export default Navbar;
