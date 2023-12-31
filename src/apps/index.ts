import { cartReducer } from '@/components/reducers/Cart';
import { counterReducer } from '@/components/reducers/Counter';
import { productReducer } from '@/components/reducers/Product';
import { combineReducers, legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


const composeEnhancers =
    typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);
const rootReducer = combineReducers({
    counter: counterReducer,
    products: productReducer,
    cart: cartReducer
})

const store = createStore(rootReducer, enhancer);

export default store