import styled from "styled-components";

const defaultShadow = "0px 5px 5px";

export const DefaultButton = styled.button`
  cursor: pointer;
  font-size: 2rem;
  border: none;
  outline: none;
  background-color: hsl(30, 25%, 89%);
  box-shadow: ${defaultShadow} hsl(28, 16%, 65%);
  color: hsl(221, 14%, 31%);
  border-radius: 20px;

  &:hover {
    background-color: hsla(240, 33%, 99%, 1);
  }
  &:focus {
    background-color: hsla(240, 33%, 99%, 1);
  }
`;

export const DelButton = styled.button`
  cursor: pointer;
  font-size: 2rem;
  border: none;
  outline: none;
  background-color: hsl(225, 21%, 49%);
  box-shadow: ${defaultShadow} hsl(224, 28%, 35%);
  color: white;
  border-radius: 20px;

  &:hover {
    background-color: hsla(224, 53%, 77%, 1);
  }
  &:focus {
    background-color: hsla(224, 53%, 77%, 1);
  }
`;

export const HighlightButton = styled.button`
  cursor: pointer;
  font-size: 2rem;
  border: none;
  outline: none;
  background-color: hsl(225, 21%, 49%);
  box-shadow: ${defaultShadow} hsl(224, 28%, 35%);
  color: white;
  border-radius: 20px;
  grid-column: span 2;

  &:hover {
    background-color: hsla(224, 53%, 77%, 1);
  }
  &:focus {
    background-color: hsla(224, 53%, 77%, 1);
  }
`;

export const EvaluatetButton = styled.button`
  cursor: pointer;
  font-size: 2rem;
  border: none;
  outline: none;
  background-color: hsl(6, 63%, 50%);
  box-shadow: ${defaultShadow} hsl(6, 70%, 34%);
  color: white;
  border-radius: 20px;
  grid-column: span 2;

  &:hover {
    background-color: hsla(6, 93%, 67%, 1);
  }
  &:focus {
    background-color: hsla(6, 93%, 67%, 1);
  }
`;

export const Background = styled.div`
  margin: 0;
  background-color: hsl(222, 26%, 31%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 0;
`;

export const Output = styled.div`
  width: 100%;
  height: 150px;
  background-color: hsl(224, 36%, 15%);
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
  background-color: hsl(223, 31%, 20%);
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
