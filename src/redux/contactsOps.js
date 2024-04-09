import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'https://660fc381356b87a55c52599c.mockapi.io'


export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',  
    async (_, thunkApi) => {
        try{
            const {data} = await axios.get(`${BASE_URL}/contacts`)
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const  addNewContact = createAsyncThunk(
    'contacts/addNewContact',
    async (newContact, thunkApi) => {
        try{
            const {data} = await axios.post(`${BASE_URL}/contacts`, newContact)
            return data
            
        }catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const  deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkApi) => {
        try{
            const {data} = await axios.delete(`${BASE_URL}/contacts/${contactId}`)
            return data.id
        }catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)