import React, { useRef, useState } from "react";
const LessonBody = ({ onClickParent, content }) => {
  const handelValue = (e) => {
    onClickParent({ video: e.target.value, name: e.target.textContent });
  };
  return (
    <>
      <li>
        <button
          onClick={(e) => handelValue(e)}
          value={content.video}
          style={{
            border: "0px",
            backgroundColor: "#d82a4e",
            fontWeight: "bolder",
            color: "white",
          }}
        >
          {content.name}
        </button>
      </li>
    </>
  );
};

export default LessonBody;
