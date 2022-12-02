import { legacy_createStore as createStore,combineReducers } from "redux";
import UserReducer from "../reducer/userReducer";
import AuthReducer from "../reducer/authReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

 
const persistConfig = {
    key: 'root',
    storage,
  }

const reducers = combineReducers({
    AuthReducer:AuthReducer,
    UserReducer:UserReducer
}) 
const persistedReducer = persistReducer(persistConfig, reducers);
export let Store = createStore(persistedReducer)
export let persistor = persistStore(Store);
