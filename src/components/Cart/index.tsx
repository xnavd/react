import React from "react";

type Props = {};

const Cart = (props: Props) => {
  return (
    <div className="flex space-x-4">
      <div>cart</div>
      <button className="bg-blue-400 p-2"> + </button>
      <button className="bg-red-400 p-2"> - </button>
      <button className="bg-green-400 p-2">Add</button>
    </div>
  );
};

export default Cart;
