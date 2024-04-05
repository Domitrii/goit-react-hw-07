import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";


const store = configureStore({
    reducer:{
        contacts: contactsReducer ,
        filters: filterReducer,
    }
})

export default store