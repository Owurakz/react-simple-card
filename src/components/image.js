import React from "react";

const Image = (props) => {
  return (
    <div>
      <img src={props.img} style={{ height: "240px" }} className="image"></img>
    </div>
  );
};

export default Image;
