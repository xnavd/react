import { produce } from "immer";

const initialState = {
  cart: [],
  isLoading: false,
  error: "",
} as { cart: any[]; isLoading: boolean; error: string };

export const cartReducer = (state = initialState, action: any) => {
    return produce(state, draftState => {
    })
};
