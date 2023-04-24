import React, {useState} from "react";

const Input = ({ label, value, onChange }) => (
    <div>
        <label>{label}</label>
        <input type="text" value={value} onChange={onChange} />
    </div>
);

const EditContact = ({ contact, onEdit, onCancel }) => {
    const [name, setName] = useState(contact.name);
    const [job_title, setJob_title] = useState(contact.job_title);
    const [gpsLatitude, setGpsLatitude] = useState(contact.gpsLatitude);
    const [gpsLongitude, setGpsLongitude] = useState(contact.gpsLongitude);
    const [company, setCompany] = useState(contact.company);
    const [street, setStreet] = useState(contact.street);
    const [city, setCity] = useState(contact.city);
    const [telephone, setTelephone] = useState(contact.telephone);
    const [photo, setPhoto] = useState(null);

    const handleNameChange = (event) => setName(event.target.value);
    const handleJobTitleChange = (event) => setJob_title(event.target.value);
    const handleGpsLatitudeChange = (event) => setGpsLatitude(event.target.value);
    const handleGpsLongitudeChange = (event) => setGpsLongitude(event.target.value);
    const handleCompanyChange = (event) => setCompany(event.target.value);
    const handleStreetChange = (event) => setStreet(event.target.value);
    const handleCityChange = (event) => setCity(event.target.value);
    const handleTelephoneChange = (event) => {
        const { value } = event.target;
        if (/^[0-9()+]+$/.test(value)) {
            setTelephone(value);
        }
    };
    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        setPhoto(file);
    };

    const handleSave = async () => {
        const updatedContact = {
            ...contact,
            name,
            job_title,
            gpsLatitude: parseFloat(gpsLatitude),
            gpsLongitude: parseFloat(gpsLongitude),
            company,
            street,
            city,
            telephone,
        };
        await onEdit(updatedContact);
        console.log(updatedContact)
    };
    return (
        <div className="card">
            <div className="contact">
                <div className="contact__photo">
                    {contact.photo && <img src={contact.photo} alt={"Contact"} />}
                    <label>
                        Photo:
                        <input type="file" onChange={handlePhotoChange} />
                    </label>
                    <Input
                        className="contact__job-title"
                        label={"jobTitle"}
                        value={job_title}
                        onChange={handleJobTitleChange}
                    />
                </div>
                <div className="contact__location">
                    <Input label="Name" value={name} onChange={handleNameChange} />
                    <Input
                        label="Latitude"
                        value={gpsLatitude}
                        onChange={handleGpsLatitudeChange}
                    />
                    <Input
                        label="Longitude"
                        value={gpsLongitude}
                        onChange={handleGpsLongitudeChange}
                    /><Input label="Company" value={company} onChange={handleCompanyChange} />
                    <Input label="Street" value={street} onChange={handleStreetChange} />
                    <Input label="City" value={city} onChange={handleCityChange} />
                    <Input label="Telephone number" value={telephone} onChange={handleTelephoneChange} />
                </div>
            </div>
            <div className="contact__actions">
                <button className="btn btn-primary" onClick={handleSave}>
                    Save
                </button>
                <button className="btn btn-secondary" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </div>
    );
};


export default EditContact;