import { createStore, combineReducers} from "redux";
import { favorites } from "./reducers/favorites";
import { search } from "./reducers/search";
// import {result} from "./reducers/results"


const rootReducer = combineReducers({
    movies:favorites,
    search,
});
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;