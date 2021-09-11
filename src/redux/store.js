import { combineReducers, createStore } from "redux";
import $notes from "./notes.reducer";

const store = createStore(combineReducers({
    $notes
}));

export default store;
