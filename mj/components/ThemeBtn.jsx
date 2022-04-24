import React from "react";
import { useDispatch } from "react-redux";
import { THEME_TOGGLE_REQUEST } from "../reducers/mode";

const ThemeBtn = () => {
  const dispatch = useDispatch();

  const themeChangeHandler = () => {
    dispatch({
      type: THEME_TOGGLE_REQUEST,
    });
  };

  return <button onClick={() => themeChangeHandler()}>DARK | LIGHT</button>;
};

export default ThemeBtn;
