import { DefaultButton } from "../styles/styles";
import { ACTIONS } from "../reducers/actions";

export default function DigitButton({ dispatch, digit }) {
  return (
    <DefaultButton
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>
      {digit}
    </DefaultButton>
  );
}
