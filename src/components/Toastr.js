import React from "react";
import Toast from "react-bootstrap/Toast";

const Toastr = ({ type, text, show, handleToastrClose }) => {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: "relative",
        minHeight: "100px"
      }}
    >
      <Toast
        style={{
          position: "absolute",
          bottom: 0,
          right: 0
        }}
        onClose={handleToastrClose}
        show={show}
        delay={4000}
        autohide
      >
        <Toast.Header style={{ backgroundColor: "#7fcd91" }}>
          <strong className="mr-auto" style={{ color: "#332f2c" }}>
            {type}
          </strong>
        </Toast.Header>
        <Toast.Body style={{ backgroundColor: "#ccedd2", color: "#332f2c" }}>
          {text}
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default Toastr;
