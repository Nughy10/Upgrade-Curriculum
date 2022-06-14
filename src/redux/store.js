import { applyMiddleware } from "redux";
import { legacy_createStore as createStore} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import pageReducer from "./page/page.reducer";

const rootReducer = pageReducer;

const newStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default newStore;
