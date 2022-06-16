import React, { useState } from "react";
import PropTypes from "prop-types";
export default function TextForm(props) {
  const [text, setText] = useState("");
  const [mod, setMod] = useState("");
  const whenChanged = (event) => {
    setText(event.target.value);
    setMod(
      event.target.value.replace(/^[ ]+|[ ]+$/g, "").replace(/[ ]+/g, " ")
    );
  };
  const whenClicked1 = () => {
    setText(text.toUpperCase());
    props.showAlert("Succesfully converted to UPPERCASE");
  };
  const whenClicked2 = () => {
    setText(text.toLowerCase());
    props.showAlert("Succesfully converted to lowercase");

  };
  const whenClicked3 = () => {
    setText("");
    props.showAlert("Succesfully Erased");

  };
  const whenClicked4 = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Succesfully Copied");
  };
  const whenClicked5 = () => {
    navigator.clipboard.writeText(text);
    setText("");
    setMod("");
    props.showAlert("Succesfully Erased ans Copied");
  };
  const whenClicked6 = () => {
    setText(mod);
    props.showAlert("Succesfully removed extra spaces");
  };

  return (
    <div className={`bg-${props.arr[0]} text-${props.arr[1]} vh-100`} >
      <h3 className="mx-3"><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-textarea-t"
            viewBox="0 0 16 16"
          >
            <path d="M1.5 2.5A1.5 1.5 0 0 1 3 1h10a1.5 1.5 0 0 1 1.5 1.5v3.563a2 2 0 0 1 0 3.874V13.5A1.5 1.5 0 0 1 13 15H3a1.5 1.5 0 0 1-1.5-1.5V9.937a2 2 0 0 1 0-3.874V2.5zm1 3.563a2 2 0 0 1 0 3.874V13.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V9.937a2 2 0 0 1 0-3.874V2.5A.5.5 0 0 0 13 2H3a.5.5 0 0 0-.5.5v3.563zM2 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            <path d="M11.434 4H4.566L4.5 5.994h.386c.21-1.252.612-1.446 2.173-1.495l.343-.011v6.343c0 .537-.116.665-1.049.748V12h3.294v-.421c-.938-.083-1.054-.21-1.054-.748V4.488l.348.01c1.56.05 1.963.244 2.173 1.496h.386L11.434 4z" />
          </svg>{props.heading}</h3>
      <div className="mx-3">
        <div className="mb-3 mx-3">
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="10"
            placeholder="Enter Your Text"
            className={`form-control bg-${props.arr[0]} text-${props.arr[1]}`}
            value={text}
            onChange={whenChanged}
          ></textarea>
        </div>
        <div>
          <div className="row mx-3">
            <div className="d-grid gap-2 col-12 col-sm-6 col-md-4  mx-auto my-2">
              <button
                className="btn btn-primary"
                onClick={whenClicked1}
                type="button"
              >
                Convert to UPPERCASE
              </button>
            </div>

            <div className="d-grid gap-2 col-12 col-sm-6 col-md-4  mx-auto my-2">
              <button
                className="btn btn-primary"
                onClick={whenClicked2}
                type="button"
              >
                Convert to lowercase
              </button>
            </div>

            <div className="d-grid gap-2 col-12 col-sm-6 col-md-4  mx-auto my-2">
              <button
                className="btn btn-primary"
                onClick={whenClicked3}
                type="button"
              >
                Erase Text
              </button>
            </div>

            <div className="d-grid gap-2 col-12 col-sm-6 col-md-4  mx-auto my-2">
              <button
                className="btn btn-primary"
                onClick={whenClicked4}
                type="button"
              >
                Copy Text
              </button>
            </div>

            <div className="d-grid gap-2 col-12 col-sm-6 col-md-4  mx-auto my-2">
              <button
                className="btn btn-primary"
                onClick={whenClicked5}
                type="button"
              >
                Cut Text
              </button>
            </div>

            <div className="d-grid gap-2 col-12 col-sm-6 col-md-4  mx-auto my-2">
              <button
                className="btn btn-primary"
                onClick={whenClicked6}
                type="button"
              >
                Remove Extra Spaces
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-3 text-center my-3">
        <h2>Text Summary</h2>
        <h3>
          Number of words = {mod.length !== 0 ? mod.split(" ").length : 0}
        </h3>
        <h3>
          Number of characters ={" "}
          {text.length - (text.match(/[ ]/g) || []).length}
        </h3>
      </div>
    </div>
  );
}
TextForm.propTypes = { heading: PropTypes.string.isRequired };
TextForm.defaultProps = { heading: "FORM" };
