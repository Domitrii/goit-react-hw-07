import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteContacts, getContact, postContacts } from "../services/services";


export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',  // action type prefix
    async (_, thunkApi) => {
        try{
            const contacts = await getContact()
            return contacts
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const  addNewContact = createAsyncThunk(
    'contacts/addNewContact',
    async (newContact, thunkApi) => {
        try{
            const addContact = await postContacts(newContact);
            return addContact;
        }catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const  deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkApi) => {
        try{
            const removeContact = await deleteContacts(contactId);
            return removeContact;
        }catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)