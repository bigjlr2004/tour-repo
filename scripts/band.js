import { getVenues, getBands, getBookings } from "./database.js"

const venues = getVenues()
const bands = getBands()
const bookings = getBookings()

document.addEventListener(
    "click", // this is the type of event
    (clickEvent) => {
        //variable fo the click event target
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("band")) {
            const [,bandPrimary] = itemClicked.id.split("--")
            for (const band of bands) {
                if(band.id === parseInt(bandPrimary)){
                    let bookingMatches = matchBooking(band.id)
                    let matchedVenues = bookedVenues(bookingMatches)
                    window.alert(`${band.name} ${matchedVenues}`)
                }
            }

        }
    }
)
const matchBooking = (bandid) => {
    //declare an empty array to store matching bookings
    const bandBookings = []
    for (const booking of bookings) {
        
        if(booking.bandid === bandid) {
            bandBookings.push(booking)
        }
    }
return bandBookings
}

const bookedVenues = (matchedBookings) => {
    // Define an empty string that will get appended with matching cities
    let venueString = ""
    venueString = "Tour Dates:"
        for (const booking of matchedBookings) {
        
        for (const venue of venues) {
            if (venue.id === booking.venueid) {
                
                // Add the name of the matching city to the string of city names
                venueString += `\n${venue.name} on ${booking.date}`
            }
        }
       // After the loop is done, return the string
     }
     return venueString
     }


 export const allBands = () => {
    let html = `<ul>`

    for (const band of bands) {
        html += `<li id="band--${band.id}">${band.name}</li>`
    }

    html += "</ul>"

    return html
}

