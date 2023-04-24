const axios = require('axios');

const uuid = require('uuid');
const path = require('path');
const { Contact } = require('../models/models');
const ApiError = require('../error/ApiError');

class ContactsController {
    async create(req, res, next) {
        try {
            let { id, name, company, street, city, telephone, job_title } = req.body;
            const { photo } = req.files;
            let fileName = uuid.v4() + ".jpg";
            await photo.mv(path.resolve(__dirname, '..', 'static', fileName));

            //const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${API_KEY}`);
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
            //const { lat, lng } = response.data.results[0].geometry.location;
            const contact = await Contact.create({
                id,
                name,
                company,
                street,
                city,
                telephone,
                job_title,
                photo: fileName,
                gpsLatitude: lat,
                gpsLongitude: lng,
            });
            return res.json(contact);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async editContact(req, res, next) {
        try {
            const { id } = req.params;
            const { name, company, street, city, telephone, job_title } = req.body;
            const { photo } = req.files;
            const fileName = uuid.v4() + ".jpg";
            await photo.mv(path.resolve(__dirname, '..', 'static', fileName));

            //const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${API_KEY}`);
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
            //const { lat, lng } = response.data.results[0].geometry.location;

            const contact = await Contact.findOne({ where: { id } });
            if (!contact) {
                return next(ApiError.notFound(`Contact with ID ${id} not found`));
            }
            await contact.update({
                name,
                company,
                street,
                city,
                telephone,
                job_title,
                photo: fileName,
                gpsLatitude: lat,
                gpsLongitude: lng,
            });

            return res.json(contact);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        let contacts = await Contact.findAndCountAll();
        return res.json(contacts);
    }

    async getOne(req, res) {
        const { id } = req.params;
        const contact = await Contact.findOne({ where: { id } });
        return res.json(contact);
    }

    async remove(req, res, next) {
        try {
            const { id } = req.params;
            const contact = await Contact.findOne({ where: { id } });
            if (!contact) {
                return next(ApiError.notFound(`Contact with ID ${id} not found`));
            }
            await contact.destroy();
            return res.json({ message: `Contact with ID ${id} has been deleted` });
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

}

module.exports = new ContactsController();
