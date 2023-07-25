import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";

import {
  addProduct,
  deleteProduct,
  fetchProducts,
  updateProduct,
} from "@/Actions/product";

const ProductList = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { products, isLoading, error } = useSelector(
    (state: any) => state.products
  );
  useEffect(() => {
    dispatch(fetchProducts() as any);
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {products?.map((item: any) => (
        <div key={item?.id}>{item.name}</div>
      ))}

      <button
        onClick={() => dispatch(addProduct({ name: "Product C" }))}
        className="bg-blue-500 m-2 p-2"
      >
        Add new product
      </button>
      <button
        onClick={() =>
          dispatch(updateProduct({ name: "Product update  lan 1", id: 3 }))
        }
        className="bg-blue-500 m-2 p-2"
      >
        Edit Product
      </button>
      <button
        onClick={() => dispatch(deleteProduct(3))}
        className="bg-blue-500 m-2 p-2"
      >
        Delete Product
      </button>
    </div>
  );
};

export default ProductList;
