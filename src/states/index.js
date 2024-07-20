import { configureStore } from "@reduxjs/toolkit";
import threadReducer from "./threads/reducer";
import usersReducer from "./users/reducer";


const store = configureStore({
    reducer: {
        threads: threadReducer,
        users: usersReducer
    },
});

export default store