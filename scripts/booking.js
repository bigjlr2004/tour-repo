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
    let foundVenue = ""

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

        html += `<li id="booking--${band.id}">${band.name} is playing at ${foundVenue.name} on ${booking.date}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click", // this is the type of event
    (clickEvent) => {
        //the target is the most specific HTML element that was clicked by the user
        const itemClicked = clickEvent.target
        //check to see if the user clicked on an element that starts with product

        if (itemClicked.id.startsWith("booking")) {
            //extract the primary key for the product from the html element that was clicked on
            const [,primaryKey] = itemClicked.id.split("--")
            //now that we have thew primary key of the product that
            //was clicked on we need to iterate through the products array
            //and find the matching product and price
            for (const band of bands) {
                
           
            
                if (band.id === parseInt(primaryKey)){
            window.alert
            (`${band.name}
             ${band.genre}
             Formed in ${band.formed}
             ${band.numOfMembers} members`
             )
            }  
            }
        }

        }
    
)


