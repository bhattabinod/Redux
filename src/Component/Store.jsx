import { createStore } from "redux";
import Reducer from "../Service/reducers/reducers"

const store = createStore(Reducer)

export default store;