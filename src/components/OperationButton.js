import { DefaultButton } from "../styles/styles";
import { ACTIONS } from "../reducers/actions";

export default function OperationButton({ dispatch, operation }) {
  return (
    <DefaultButton
      onClick={() =>
        dispatch({ type: ACTIONS.CHOSE_OPERATION, payload: { operation } })
      }>
      {operation === "*" ? "x" : operation}
    </DefaultButton>
  );
}
