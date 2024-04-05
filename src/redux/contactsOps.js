import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteContacts, getContact, postContacts } from "../services/services";


export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',  // action type prefix
    async (_, thunkApi) => {
        try{
            const contacts = await getContact()
            return contacts
        } catch (error) {
            thunkApi.rejectWithValue(error.message)
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
            thunkApi.rejectWithValue(error.message)
        }
    }
)

export const  deleteContact = createAsyncThunk(
    'contacts/addNewContact',
    async (contactId, thunkApi) => {
        try{
            const removeContact = await deleteContacts(contactId);
            return removeContact;
        }catch (error) {
            thunkApi.rejectWithValue(error.message)
        }
    }
)