import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from "../features/theme";

const Theme = () => {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(changeTheme(color));
        }}
      >
        Change color
      </button>
    </div>
  );
};

export default Theme;
