import { useReducer } from "react";
import "./App.css";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import { GlobalStyles } from "./GlobalStyle";
import {
  HighlightButton,
  EvaluatetButton,
  Background,
  Output,
  DigitsContainer,
  CalculatorGrid,
  DelButton,
} from "./styles";
import Toggler from "./components/Toggler";

// States
export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CLEAR: "clear",
  CHOSE_OPERATION: "choose-operation",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

// State Controller
function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "0" && state.currentOperand === "0") return state;
      if (payload.digit === "." && state.currentOperand?.includes("."))
        return state;
      if (state.currentOperand == null && payload.digit === ".") {
        return {
          ...state,
          currentOperand: "0.",
        };
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case ACTIONS.CHOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }
      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      )
        return state;
      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        };
      }
      if (state.currentOperand == null) return state;
      if (state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: null,
        };
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    default:
      break;
  }
}

// Equals Function
function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) {
    return "";
  }
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "/":
      computation = prev / current;
      break;
    case "*":
      computation = prev * current;
      break;
    default:
      break;
  }
  return computation.toString();
}

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

  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Background>
        <CalculatorGrid>
          <Toggler></Toggler>
          <Output>
            <div className="previous-operand">
              {formatOperand(previousOperand)} {operation}
            </div>
            <div className="current-operand">
              {formatOperand(currentOperand)}
            </div>
          </Output>
          <DigitsContainer>
            <DigitButton digit={"7"} dispatch={dispatch} />
            <DigitButton digit={"8"} dispatch={dispatch} />
            <DigitButton digit={"9"} dispatch={dispatch} />
            <DelButton onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
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
              className="span-two"
              onClick={() => dispatch({ type: ACTIONS.CLEAR })}>
              AC
            </HighlightButton>
            <EvaluatetButton
              className="span-two"
              onClick={() => dispatch({ type: ACTIONS.EVALUATE })}>
              =
            </EvaluatetButton>
          </DigitsContainer>
        </CalculatorGrid>
      </Background>
    </>
  );
}

export default App;
