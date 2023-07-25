import { createContext, useReducer } from "react";

export const ProductContext = createContext({} as any);

const initialState = {
  products: [],
  isLoading: false,
  error: "",
};

const productReducer = (state: any, action: any) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "DELETE_PRODUCT":
      return {
        // ...state,
        // products: [...state.products, action.payload],
      };
    case "EDIT_PRODUCT":
      return {
        ...state,
        products: state.products.map((product: any) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    default:
      return state;
  }
};

const ProductProvider = ({ children }: any) => {
  // const [products, setProducts] = useState([] as any);
  // //   const [count, setCount] = useState(0);

  // const addProduct = async (product: any) => {
  //   try {
  //     // call api
  //     const { data } = await axios.post(
  //       `http://localhost:3000/products`,
  //       product
  //     );
  //     // rerender
  //     setProducts([...products, data]);
  //   } catch (error: any) {
  //     console.log(error.message);
  //   }
  // };
  // const editProduct = async (product: any) => {
  //   try {
  //     // call api
  //     const { data } = await axios.put(
  //       `http://localhost:3000/products/${product.id}`,
  //       product
  //     );
  //     // rerender
  //     setProducts(
  //       products.map((item: any) => (item.id === data.id ? data : item))
  //     );
  //   } catch (error: any) {
  //     console.log(error.message);
  //   }
  // };
  // const deleteProduct = async (product: any) => {
  //   try {
  //     // call api
  //     await axios.delete(`http://localhost:3000/products/${product.id}`);
  //     // rerender
  //     setProducts(products.filter((item: any) => item.id !== product.id));
  //   } catch (error: any) {
  //     console.log(error.message);
  //   }
  // };
  // const fetchProduct = async () => {
  //   try {
  //     const { data } = await axios.get(`http://localhost:3000/products`);
  //     setProducts(data);
  //   } catch (error: any) {
  //     console.log(error.message);
  //   }
  // };
  const [state, dispatch] = useReducer(productReducer, initialState);
  //
  return (
    <ProductContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
