import { legacy_createStore as createStore } from "redux";
import UserReducer from "../reducer/userReducer";
const Store = createStore(UserReducer)

export default Store;