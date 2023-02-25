import React from "react";

const Head = ({ title }) => {
  React.useEffect(() => {
    document.title = `PicSure | ${title}`;
  });
  return <div></div>;
};

export default Head;
