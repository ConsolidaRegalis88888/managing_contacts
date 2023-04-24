import React from 'react';
import bin from './../../assets/icone-bin.png';
import pencil from './../../assets/icone-pencil.png';
import point from './../../assets/icone-location.png';

const ContactItem = ({ contact, onDelete, onEdit, index}) => {
    const handleEdit = () => {
        onEdit(contact);
    };
    return (
        <div className={`card contact-card ${index % 3 === 0 ? "first-in-row" : ""}`}>
            <div className={"contact"}>
                <div className={"contact__photo"}>
                    <img src={contact.photo} alt={"Contact"} />
                    <p className={"contact__job-title"}>{contact.job_title}</p>
                </div>
                <div className={"contact__location"}>
                    <h2 className={"contact__name"}>{contact.name}</h2>
                    <img src={point} alt={"Point"} />
                    <p>{contact.gpsLatitude}</p>
                    <p>{contact.gpsLongitude}</p>
                </div>
                <div className={"contact__details"}>
                    <p>{contact.company}</p>
                    <p>{contact.street}</p>
                    <p>{contact.city}</p>
                    <p>{contact.telephone}</p>
                </div>
            </div>
            <div className={"contact__actions"}>
                <button className={"icon-button"} onClick={handleEdit}>
                    <img src={pencil} alt={"Edit"} />
                </button>
                <button className={"icon-button"} onClick={() => onDelete(contact.id)}>
                    <img src={bin} alt={"Delete"} />
                </button>
            </div>
        </div>
    )
}
export default ContactItem;

