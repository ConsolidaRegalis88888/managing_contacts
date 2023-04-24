import axios from "axios";

const instanceContacts = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

export {
    instanceContacts,
}

export const fetchContacts = async () => {
    try {
        const response = await instanceContacts.get('/contacts');
        return response.data.rows;
    } catch (error) {
        throw new Error('Failed to fetch contacts');
    }
};

export const deleteContact = async (id) => {
    try {
        const response = await instanceContacts.delete(`/contacts/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to delete contact');
    }
};
export const updateContact = async (updatedContact) => {
    try {
        const response = await instanceContacts.put(`/contacts/${updatedContact.id}`, updatedContact);
        console.log(response.data)
        return response.data;
    } catch (error) {
        throw new Error('Failed to update contact');
    }
};

export const addContact = async (newContact) => {
    try {
        const response = await instanceContacts.post('/contacts', newContact);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error.response.data);
        throw new Error('Failed to add contact');
    }
};