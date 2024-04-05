import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./contactsSlice";







const store = configureStore({
    reducer:{
        contacts: contactSlice ,
    }
})