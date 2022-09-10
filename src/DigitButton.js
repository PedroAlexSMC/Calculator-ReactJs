import { ACTIONS } from "./App";
import { DefaultButton } from "./styles";

export default function DigitButton({ dispatch, digit }) {
  return (
    <DefaultButton
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>
      {digit}
    </DefaultButton>
  );
}
