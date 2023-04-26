const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/ApiError');
const { contacts } = require('./fakeContacts');


class ContactsController {
    async create(req, res, next) {
        try {
            let { id, name, company, street, city, telephone, job_title, photo } = req.body;
            const fakeResponse = {
                data: {
                    results: [{
                        geometry: {
                            location: {
                                lat: 48.8566,
                                lng: 2.3522
                            }
                        }
                    }]
                }
            };
            const { lat, lng } = fakeResponse.data.results[0].geometry.location;

            const contact = {
                id,
                name,
                company,
                street,
                city,
                telephone,
                job_title,
                photo,
                gpsLatitude: lat,
                gpsLongitude: lng,
            };
            contacts.push(contact);
            return res.json(contact);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async editContact(req, res, next) {
        try {
            const { id } = req.params;
            const { name, company, street, city, telephone, job_title, photo } = req.body;
           // const { photo } = req.files;
            // const fileName = uuid.v4() + ".jpg";
           // await photo.mv(path.resolve(__dirname, '..', 'static', fileName));
            const fakeResponse = {
                data: {
                    results: [{
                        geometry: {
                            location: {
                                lat: 48.8566,
                                lng: 2.3522
                            }
                        }
                    }]
                }
            };

            const { lat, lng } = fakeResponse.data.results[0].geometry.location;

            const contactIndex = contacts.findIndex(contact => contact.id == id);
            if (contactIndex === -1) {
                return next(ApiError.notFound(`Contact with ID ${id} not found`));
            }

            const contact = {
                id,
                name,
                company,
                street,
                city,
                telephone,
                job_title,
                photo,
                gpsLatitude: lat,
                gpsLongitude: lng,
            };
            contacts[contactIndex] = contact;

            return res.json(contact);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        return res.json(contacts);
    }

    async getOne(req, res) {
        const { id } = req.params;
        const contact = contacts.find(contact => contact.id == id);
        return res.json(contact);
    }

    async remove(req, res, next) {
        try {
            const { id } = req.params;
            const contactIndex = contacts.findIndex(contact => contact.id == id);
            if (contactIndex === -1) {
                return next(ApiError.notFound(`Contact with ID ${id} not found`));
            }
            const contact = contacts[contactIndex];
            contacts.splice(contactIndex, 1);
            return res.json({ message: `Contact with ID ${id} has been deleted` });
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new ContactsController();