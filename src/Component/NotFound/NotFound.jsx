import React from "react";
import "./NotFound.scss";
import notFoundImage from "../assets/images/caution.png";

function NotFound() {
  return (
    <>
      <div className="notfound-container">
        <img
          className="not-found-img"
          src={notFoundImage}
          alt="page not found"
        />
        <h1 className="notfound-h1"> Error 404 Page Not Found</h1>
      </div>
    </>
  );
}

export default NotFound;
