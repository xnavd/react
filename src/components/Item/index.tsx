import React from "react";
import Button from "../Button";
import { GoTrash } from "react-icons/go";
import { ICar } from "@/interfaces/car";
type ItemProps = {
  car: ICar;
  onRemove: (id: number | string) => void;
};

const Item = ({ car, onRemove }: ItemProps) => {
  return (
    <div className="flex justify-between items-center p-2">
      {car.name}
      <Button
        type="danger"
        icon={<GoTrash />}
        onClick={() => onRemove(car.id!)}
      />
    </div>
  );
};

export default Item;
