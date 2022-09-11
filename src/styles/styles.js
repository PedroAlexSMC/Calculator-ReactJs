import styled from "styled-components";

const defaultShadow = "0px 5px 5px";

export const DefaultButton = styled.button`
  cursor: pointer;
  font-size: 2rem;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.keyColors.keyBackground};
  box-shadow: ${defaultShadow} ${(props) => props.theme.keyColors.keyShadow};
  color: ${(props) =>
    props.theme.fontColors.secondary
      ? props.theme.fontColors.secondary
      : props.theme.fontColors.key};
  border-radius: 20px;

  &:hover {
    background-color: ${(props) => props.theme.keyColors.keyHover};
  }
  &:focus {
    background-color: ${(props) => props.theme.keyColors.keyHover};
  }
`;

export const DelButton = styled.button`
  cursor: pointer;
  font-size: 2rem;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.keyColors.highlightBackground};
  box-shadow: ${defaultShadow} ${(props) => props.theme.keyColors.highlightShadow};
  color: ${(props) => props.theme.fontColors.highlight};
  border-radius: 20px;

  &:hover {
    background-color: ${(props) => props.theme.keyColors.highlightHover};
  }
  &:focus {
    background-color: ${(props) => props.theme.keyColors.highlightHover};
  }
`;

export const HighlightButton = styled.button`
  cursor: pointer;
  font-size: 2rem;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.keyColors.highlightBackground};
  box-shadow: ${defaultShadow} ${(props) => props.theme.keyColors.highlightShadow};
  color: ${(props) => props.theme.fontColors.highlight};
  border-radius: 20px;
  grid-column: span 2;

  &:hover {
    background-color: ${(props) => props.theme.keyColors.highlightHover};
  }
  &:focus {
    background-color: ${(props) => props.theme.keyColors.highlightHover};
  }
`;

export const EvaluatetButton = styled.button`
  cursor: pointer;
  font-size: 2rem;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.keyColors.evaluateBackground};
  box-shadow: ${defaultShadow} ${(props) => props.theme.keyColors.evaluateShadow};
  color: ${(props) => props.theme.fontColors.evaluate};
  border-radius: 20px;
  grid-column: span 2;

  &:hover {
    background-color: ${(props) => props.theme.keyColors.evaluateHover};
  }
  &:focus {
    background-color: ${(props) => props.theme.keyColors.evaluateHover};
  }
`;

export const Background = styled.div`
  margin: 0;
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 0;
`;

export const Output = styled.div`
  width: 530px;
  height: 150px;
  background-color: ${(props) => props.theme.screenBackground};
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  padding: 2rem;
  word-wrap: break-word;
  word-wrap: break-all;
`;

export const DigitsContainer = styled.div`
  background-color: ${(props) => props.theme.keypadBackground};
  display: grid;
  border-radius: 20px;
  grid-template-columns: repeat(4, 6rem);
  grid-template-rows: minmax(4rem, auto) repeat(4, 4rem);
  gap: 30px;
  padding: 30px;
  width: fit-content;
  height: fit-content;
`;

export const CalculatorGrid = styled.div`
  width: 55vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const PreviousOperand = styled.div`
  color: ${(props) =>
    props.theme.fontColors.secondary
      ? props.theme.fontColors.secondary
      : props.theme.fontColors.output};
  opacity: 0.75;
  font-size: 1.5rem;
`;

export const CurrentOperand = styled.div`
  color: ${(props) =>
    props.theme.fontColors.secondary
      ? props.theme.fontColors.secondary
      : props.theme.fontColors.output};
  font-size: 2.5rem;
`;
