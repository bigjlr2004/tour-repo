import { getBands, getVenues, getBookings } from "./database.js";

//Get copy of state for use in this module

const bands = getBands();
const venues = getVenues();
const bookings = getBookings();

let bookingMatches = [];
const bandsBookings =(booking) => {
    if(bands.id === booking.bandid) {
        bookingMatches.push(booking)
    }
}

const findBand = (booking, bands) => {
    let foundBand = ""

    for (const band of bands) {
        if (band.id === booking.bandid) {
            foundBand = band 
        }
        
    }
return foundBand
    
}

const findVenue = (booking, venues) => {
    let foundVenue = []

    for (const venue of venues) {
        if (booking.venueid === venue.id) {
            foundVenue = venue
        }
    }

    return foundVenue
}

export const displayBookings = () => {
    let html = ""
    html = "<ul>"

    for (const booking of bookings) {
        const band = findBand(booking, bands)
        const foundVenue = findVenue(booking, venues)

        html += `<li>${band.name} is playing at ${foundVenue.name} on ${booking.date}</li>`
    }

    html += "</ul>"

    return html
}

