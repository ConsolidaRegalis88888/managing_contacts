import React, { useState, useEffect } from "react";
import ContactItem from "./ContactItem";
import EditContact from "./EditContact";
import AddContact from "./AddContact";
import './styles/contactsPageStyles.css';
import {deleteContact, fetchContacts, updateContact} from "../../services/contactsApi";
import addContact from "./AddContact";

const ContactsPage = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingContact, setEditingContact] = useState(null);
    const [showAddContact, setShowAddContact] = useState(false);

    useEffect(() => {
        async function fetch() {
            try {
                const response = await fetchContacts();
                setContacts(response);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetch();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteContact(id);
            setContacts((prevContacts) =>
                prevContacts.filter((contact) => contact.id !== id)
            );
        } catch (error) {
            setError(error.message);
        }
    };

    const handleEdit = async (updatedContact) => {
        try {
            await updateContact(updatedContact);
            setContacts((prevContacts) =>
                prevContacts.map((contact) =>
                    contact.id === updatedContact.id ? updatedContact : contact
                )
            );
        } catch (error) {
            setError(error.message);
        }
    };

    const handleAdd = async (newContact) => {
        try {
            const added = await addContact(newContact);
            setContacts((prevContacts) => [...prevContacts, added]);
        } catch (error) {
            setError(error.message);
        }
    };

    const toggleAddContact = () => {
        setShowAddContact((prevShowAddContact) => !prevShowAddContact);
    };

    return (
        <div className="contacts-page-container">
            {loading && <p>Loading contacts...</p>}
            {error && <p>Failed to load contacts: {error}</p>}
            {!loading && !error && (
                <div className="contacts-list">
                    {contacts.map((contact) => (
                        <ContactItem
                            key={contact.id}
                            contact={contact}
                            onDelete={handleDelete}
                            onEdit={setEditingContact}
                        />
                    ))}
                    {editingContact && (
                        <EditContact
                            contact={editingContact}
                            onEdit={handleEdit}
                            onCancel={() => setEditingContact(null)}
                        />
                    )}
                    {showAddContact && <AddContact onAdd={handleAdd} onCancel={toggleAddContact} />}
                </div>
            )}
            <button className="btn btn-primary add-contact-btn" onClick={toggleAddContact}>
                <span className="add-icon">+</span>
            </button>
        </div>
    );
};

export default ContactsPage;


