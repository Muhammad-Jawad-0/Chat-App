// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./reducers/user";
//  import counter from "./reducers/Counter";

//  const store = configureStore({
//     reducer : {
//         user : userReducer,
//         counter : counter
//     }
//  })

//  export default store; 

import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../RTK-quary";

 const store = configureStore({
    reducer : {
        [productsApi.reducerPath] : productsApi.reducer,
    },
    middleware : (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productsApi.middleware)
 })

 export default store; 
