import React, { useEffect, useState } from "react";
import './card.css'

function    Card(props) {

  const data = props.staticData;

  
  return (
    <React.Fragment>
      <div className="row">
        {data?.map((el, i) => (
          <div key={i} className="col-lg-4 col-md-6 mt-3">
            <div className="card">
              <div className="" style={{ width: " 100%" }}>
                <img src={el.images} className="card-image-sizing card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{el.title}</h5>
                  <p className="card-text">{el.details}</p>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Card;
