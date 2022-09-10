import { ACTIONS } from "./App";
import { DefaultButton } from "./styles";

export default function OperationButton({ dispatch, operation }) {
  return (
    <DefaultButton
      onClick={() =>
        dispatch({ type: ACTIONS.CHOSE_OPERATION, payload: { operation } })
      }>
      {operation}
    </DefaultButton>
  );
}
