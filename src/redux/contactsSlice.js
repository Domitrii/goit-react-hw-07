import { createSlice } from "@reduxjs/toolkit"
import { addNewContact, deleteContact, fetchContacts } from "./contactsOps"




const INITIAL_STATE = {
    items: [],
    loading: false,
    error: null,
}


const contactSlice = createSlice({
    name: contacts,
    initialState: INITIAL_STATE,
    extraReducers: (builder) => builder
    .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
    })
    .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
    })
    .addCase(addNewContact.pending, (state) =>{
        state.loading = true;
        state.error = false;
    })
    .addCase(addNewContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
    })
    .addCase(addNewContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
    })
    .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = false;
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
    })
    .addCase(deleteContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
    })
})

export default contactSlice