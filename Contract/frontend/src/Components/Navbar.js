import React from "react";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
  
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Price Fetch DAAP
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
              <li className="nav-item">
                <Link className="nav-link active center" to="/swap">
                  Swap
                </Link>
              </li>
            </ul>
            <Button className="btn">Connect</Button>
          </div>
        </div>
      </nav>
  );
}
