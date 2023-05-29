import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-lg p-2 rounded">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <Link className="nav-link" aria-current="page" to="/color">
                  Color Image
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/restore">
                  Restore Image
                </Link>
              </li>
              <li className="nav-item dropdown mx-3">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Basic Tools
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/rcrop">
                      Rectangle Crop
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/ccrop">
                      Circle Crop
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/compress">
                      Compress Image
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/resize">
                      Resize Image
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
