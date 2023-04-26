import React, {useState} from 'react';
import {addContact} from '../../services/contactsApi';

const AddContact = ({onAdd, onCancel}) => {
    const [name, setName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [photo, setPhoto] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [company, setCompany] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [telephone, setTelephone] = useState('');
    const [telephoneError, setTelephoneError] = useState('');

    const handleTelephoneChange = (event) => {
        const { value } = event.target;
        if (/^[0-9()+\s-]+$/.test(value)) {
            setTelephone(value);
            setTelephoneError('');
        } else {
            setTelephoneError('Use only numbers and these symbols: ( ) -');
        }
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        const newContact = {
            name,
            job_title: jobTitle,
            photo,
            gpsLatitude: latitude,
            gpsLongitude: longitude,
            company,
            street,
            city,
            telephone,
        };

        try {
            const added = await addContact(newContact);
            onAdd(added);
            onCancel();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="jobTitle">Job Title:</label>
                <input
                    type="text"
                    id="jobTitle"
                    value={jobTitle}
                    onChange={(event) => setJobTitle(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="photo">Photo URL:</label>
                <input
                    type="text"
                    id="photo"
                    value={photo}
                    onChange={(event) => setPhoto(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="latitude">Latitude:</label>
                <input
                    type="text"
                    id="latitude"
                    value={latitude}
                    onChange={(event) => setLatitude(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="longitude">Longitude:</label>
                <input
                    type="text"
                    id="longitude"
                    value={longitude}
                    onChange={(event) => setLongitude(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="company">Company:</label>
                <input
                    type="text"
                    id="company"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="street">Street:</label>
                <input
                    type="text"
                    id="street"
                    value={street}
                    onChange={(event) => setStreet(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="city">City:</label>
                <input
                    type="text"
                    className="form-control"
                    id="city"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="telephone">Telephone:</label>
                <input
                    type="text"
                    id="telephone"
                    value={telephone}
                    onChange={handleTelephoneChange}
                />
            </div>
            {telephoneError && <p style={{color: 'red'}}>{telephoneError}</p>}

            <button type="submit" onClick={handleSubmit}>
                Save
            </button>
            <button type="button" onClick={onCancel}>
                Cancel
            </button>
        </form>
    )
}
export default AddContact;
