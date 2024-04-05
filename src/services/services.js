import axios from "axios"

const BASE_URL = 'https://660fc381356b87a55c52599c.mockapi.io'

export const getContact = async() => {
    const {data} = await axios.get(`${BASE_URL}/contacts`)
    return data
}

export const postContacts = async(newContact) => {
    const {data} = await axios.post(`${BASE_URL}/contacts`, newContact)
    return data
}

export const deleteContacts = async(contactId) => {
    const {data} = await axios.delete(`${BASE_URL}/${contactId}`)
    return data.id
}