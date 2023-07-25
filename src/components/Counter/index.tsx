import { CounterContext } from "@/context/CounterProvider";
import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.counter.count);

  return (
    <div>
      Value: {state}
      <br />
      <button onClick={() => dispatch({ type: "counter/increment" })}>INCREMENT</button>
      <br />
      <button onClick={() => dispatch({ type: "counter/decrement" })}>DECREMENT</button>
      <br />
      <button onClick={() => dispatch({ type: "counter/increase", payload: 10 })}>
        INCREASE
      </button>
    </div>
  );
};

export default Counter;
