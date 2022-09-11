import styled from "styled-components";
import React from "react";
import { useState } from "react";

export const Switch = styled.div`
  position: relative;
  height: 30px;
  width: 150px;
  background-color: ${(props) => props.theme.keyColors.keyBackground};
  border-radius: 13px;
  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
`;

export const SwitchRadio = styled.input`
  display: none;
`;

export const SwitchSelection = styled.span`
  display: block;
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 0px;
  width: 50px;
  height: 30px;
  background: ${(props) => props.theme.keyColors.highlightBackground};
  border-radius: 10px;
  transition: left 0.25s ease-out;
`;

export const SwitchLabel = styled.label`
  position: relative;
  z-index: 2;
  float: left;
  width: 50px;
  line-height: 30px;
  font-weight: 700;
  font-size: 12px;
  color: ${(props) =>
    props.theme.fontColors.secondary
      ? props.theme.fontColors.secondary
      : props.theme.fontColors.key};
  text-align: center;
  cursor: pointer;

  ${SwitchRadio}:checked + & {
    transition: 0.15s ease-out;
    color: #fff;
  }
`;

const ClickableLabel = ({ title, onChange, id }) => (
  <SwitchLabel onClick={() => onChange(title)} className={id}>
    {title}
  </SwitchLabel>
);

const ConcealedRadio = ({ value, selected }) => (
  <SwitchRadio type="radio" name="switch" checked={selected === value} />
);

export default function ThreeWayToggler({ theme, setter }) {
  const [selected, setSelected] = useState("1");
  const theme1 = theme.theme1;
  const theme2 = theme.theme2;
  const theme3 = theme.theme3;
  const handleChange = (val) => {
    setSelected(val);
    if (val === "3") {
      setter(theme3);
    } else if (val === "2") {
      setter(theme2);
    } else if (val === "1") {
      setter(theme1);
    }
  };
  const values = ["1", "2", "3"];

  const selectionStyle = () => {
    return {
      left: `${(values.indexOf(selected) / 3) * 100}%`,
    };
  };

  return (
    <Switch>
      {values.map((val) => {
        return (
          <span key={val}>
            <ConcealedRadio value={val} selected={selected} />
            <ClickableLabel title={val} onChange={handleChange} />
          </span>
        );
      })}
      <SwitchSelection style={selectionStyle()} />
    </Switch>
  );
}
