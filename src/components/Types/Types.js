import React from "react";
import "./Types.css";

const Types = ({ fun }) => {
  return (
    <section className="container">
      <div className="Types">
        <div style={{ backgroundColor: "#09cc10" }} onClick={fun}>
          Nature
        </div>
        <div style={{ backgroundColor: "#f5ba2b" }} onClick={fun}>
          Beach
        </div>
        <div style={{ backgroundColor: "#1e57eb" }} onClick={fun}>
          Planes
        </div>
        <div style={{ backgroundColor: "#e932f4" }} onClick={fun}>
          Houses
        </div>
        <div style={{ backgroundColor: "#de3222" }} onClick={fun}>
          Sports
        </div>
        <div style={{ backgroundColor: "#422600" }} onClick={fun}>
          Books
        </div>
      </div>
    </section>
  );
};

export default Types;
