import React from "react";
import {Link} from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.arr[0]} text-${props.arr[1]} border`}
    >
      <div className="container-fluid">
        <div>
          <Link className={`navbar-brand text-${props.arr[1]} border px-2`} to="TextAnalyzer/">
            {props.title}
          </Link>
          <Link className={`navbar-brand text-${props.arr[1]} border px-2`} to="TextAnalyzer/About">
             About
          </Link>
        </div>
        <form className="d-flex" role="search">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={props.toggleColor}
              id="flexSwitchCheckDefault"
              style={{cursor : 'pointer'}}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >{`Enable ${props.arr[1]}mode`}</label>
          </div>
        </form>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Navbar",
};
