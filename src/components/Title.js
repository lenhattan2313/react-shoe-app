import React from "react";
const Title = ({ name, title }) => {
  return (
    <div className="row">
      <div className="col-10 my-2 text-left text-title">
        <h1 className="text-title font-weight-bold">
          {name} {title}
        </h1>
      </div>
    </div>
  );
};
export default Title;
