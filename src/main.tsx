import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import CounterProvider from "./context/CounterProvider.tsx";
import ProductProvider from "./context/ProductProvider.tsx";
import { Provider } from "react-redux";
import store from "./apps/index.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
