import { useReducer } from "react";
import "./App.css";
import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OperationButton";
import { GlobalStyles } from "./styles/GlobalStyle";
import {
  HighlightButton,
  EvaluatetButton,
  Background,
  Output,
  DigitsContainer,
  CalculatorGrid,
  DelButton,
  PreviousOperand,
  CurrentOperand,
} from "./styles/styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { theme } from "./styles/Theme";
import ThreeWayToggler from "./components/ThreeWayToggler";
import reducer from './reducers/reducers'
import { ACTIONS } from "./reducers/actions";


//Formatter (ignoring decimals)
const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

//Function to Format Digits
function formatOperand(operand) {
  if (operand == null) return;
  const [integer, decimal] = operand.split(".");
  if (decimal == null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}

function App() {
  //The state is this  object, and everytime dispatch is called, the function reducer is called passing the state
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );
  const [currTheme, setCurrTheme] = useState(theme.theme1);
  return (
    <>
      <ThemeProvider theme={currTheme}>
        <GlobalStyles></GlobalStyles>
        <Background>
          <CalculatorGrid>
            <ThreeWayToggler
              theme={theme}
              setter={setCurrTheme}></ThreeWayToggler>
            <Output>
              <PreviousOperand>
                {formatOperand(previousOperand)} {operation}
              </PreviousOperand>
              <CurrentOperand>{formatOperand(currentOperand)}</CurrentOperand>
            </Output>
            <DigitsContainer>
              <DigitButton digit={"7"} dispatch={dispatch} />
              <DigitButton digit={"8"} dispatch={dispatch} />
              <DigitButton digit={"9"} dispatch={dispatch} />
              <DelButton
                onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
                DEL
              </DelButton>
              <DigitButton digit={"4"} dispatch={dispatch} />
              <DigitButton digit={"5"} dispatch={dispatch} />
              <DigitButton digit={"6"} dispatch={dispatch} />
              <OperationButton operation={"+"} dispatch={dispatch} />
              <DigitButton digit={"1"} dispatch={dispatch} />
              <DigitButton digit={"2"} dispatch={dispatch} />
              <DigitButton digit={"3"} dispatch={dispatch} />
              <OperationButton operation={"-"} dispatch={dispatch} />
              <DigitButton digit={"."} dispatch={dispatch} />
              <DigitButton digit={"0"} dispatch={dispatch} />
              <OperationButton operation={"/"} dispatch={dispatch} />
              <OperationButton operation={"*"} dispatch={dispatch} />
              <HighlightButton
                onClick={() => dispatch({ type: ACTIONS.CLEAR })}>
                AC
              </HighlightButton>
              <EvaluatetButton
                onClick={() => dispatch({ type: ACTIONS.EVALUATE })}>
                =
              </EvaluatetButton>
            </DigitsContainer>
          </CalculatorGrid>
        </Background>
      </ThemeProvider>
    </>
  );
}

export default App;
