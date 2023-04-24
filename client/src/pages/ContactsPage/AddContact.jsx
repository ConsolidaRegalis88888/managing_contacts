import React, {useState} from 'react';
import {addContact} from '../../services/contactsApi';

const AddContact = ({onAdd, onCancel}) => {
    const [name, setName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [photo, setPhoto] = useState('/assets/default.png');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [company, setCompany] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [telephone, setTelephone] = useState('');

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
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="jobTitle">Job Title:</label>
                <input
                    type="text"
                    className="form-control"
                    id="jobTitle"
                    value={jobTitle}
                    onChange={(event) => setJobTitle(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="photo">Photo URL:</label>
                <input
                    type="text"
                    className="form-control"
                    id="photo"
                    value={photo}
                    onChange={(event) => setPhoto(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="latitude">Latitude:</label>
                <input
                    type="text"
                    className="form-control"
                    id="latitude"
                    value={latitude}
                    onChange={(event) => setLatitude(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="longitude">Longitude:</label>
                <input
                    type="text"
                    className="form-control"
                    id="longitude"
                    value={longitude}
                    onChange={(event) => setLongitude(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="company">Company:</label>
                <input
                    type="text"
                    className="form-control"
                    id="company"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="street">Street:</label>
                <input
                    type="text"
                    className="form-control"
                    id="street"
                    value={street}
                    onChange={(event) => setStreet(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="city">City:</label>
                <input
                    type="text"
                    className="form-control"
                    id="city"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="telephone">Telephone:</label>
                <input
                    type="text"
                    className="form-control"
                    id="telephone"
                    value={telephone}
                    onChange={(event) => setTelephone(event.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary mr-2" onClick={handleSubmit}>
                Save
            </button>
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
                Cancel
            </button>
        </form>
    )
}
export default AddContact;
