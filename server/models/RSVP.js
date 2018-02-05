/**
 * Contains the RSVP information model.
 */

'use strict';

import mongoose from 'mongoose';

const GuestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: String,
    meal: String,
    dietaryRestrictions: String,
});

const RSVPSchema = new mongoose.Schema({
    rsvpId: { type: String, required: true },
    date: { type: Date, default: () => Date.now() },
    guest: { type: GuestSchema, required: true },
    willAttend: { type: String, required: true },
    hotelRoom: String,
    guestPlusOne: GuestSchema,
});

module.exports = mongoose.model('RSVP', RSVPSchema);
