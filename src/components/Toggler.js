import styled from "styled-components";
import React from "react";
import "./Toggler.css";

export default function Toggler() {
  return (
    <div className="togglerContainer">
      <input
        type="radio"
        id="toggle3radio1"
        className="radio1"
        name="toggle3"
      />
      <input
        type="radio"
        id="toggle3radio2"
        className="radio2"
        name="toggle3"
      />
      <input
        type="radio"
        id="toggle3radio3"
        className="radio3"
        name="toggle3"
      />
      <div className="topLabelContainer">
        <label className="labelTop1" htmlFor="toggle3radio1">
          1
        </label>
        <label className="labelTop2" htmlFor="toggle3radio2">
          2
        </label>
        <label className="labelTop3" htmlFor="toggle3radio3">
          3
        </label>
      </div>
      <span className="labelLeft">THEME:</span>
      <span className="sliderContainer">
        <label className="label1" htmlFor="toggle3radio1"></label>
        <label className="label2" htmlFor="toggle3radio2"></label>
        <label className="label3" htmlFor="toggle3radio3"></label>
        <span className="slider"></span>
      </span>
    </div>
  );
}
