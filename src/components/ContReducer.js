import { useDispatch, useSelector } from "react-redux";
import {
  add5,
  adds,
  decrement,
  decrement5,
  resets,
} from "../actions/actionsCounter";

const ContReducer = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: "150px", marginBottom: "100px" }}>
      <h2>Cont redux</h2>
      <nav>
        <button onClick={() => dispatch(add5())}>+5</button>
        <button onClick={() => dispatch(adds())}>+1</button>
        <button onClick={() => dispatch(resets())}>reset</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(decrement5())}>-5</button>
        <h3>{state.counter}</h3>
      </nav>
    </div>
  );
};

export default ContReducer;
