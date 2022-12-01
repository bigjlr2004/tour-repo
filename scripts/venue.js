import { getVenues, getBands, getBookings } from "./database.js"

const venues = getVenues()
const bands = getBands()
const bookings = getBookings()

document.addEventListener(
    "click", // this is the type of event
    (clickEvent) => {
        //the target is the most specific HTML element that was clicked by the user
        const itemClicked = clickEvent.target
        //check to see if the user clicked on an element that starts with venue

        if (itemClicked.id.startsWith("venue")) {
            //extract the primary key for the venue from the html that the user clicked on
            //the html element id string is split into an array with two objects
            //the first is an empty place holder where what we dont want goes to die
            // the second stores the value we want extracted
            const [,venuePrimary] = itemClicked.id.split("--")
            //now that we have the primary key for the venue we iterate through the 
            //venues database to get the correct venue
            for (const venue of venues) {

                if(venue.id === parseInt(venuePrimary)) {

                    //pass matched venue id into matchBooking function

                    const bookingMatches = matchBooking(venue.id)
                        //pass venue specific bookings into a function to find the band for that booking
                        //

                    const bandsString = bookedBands(bookingMatches)
                    window.alert(`${venue.name} ${bandsString} `)
                }

            }

        }
    }
)


const matchBooking = (venueid) => {
    //declare an empty array to store matching bookings
    const venueBookings = []
    //iterate through the bookings database
    for (const booking of bookings) {
        //if the bookings venue id matches the venueid that was passed 
        //then add that booking to the array venueBookings
        if(booking.venueid === venueid) {
            venueBookings.push(booking)
        }
    }//return filtered bookings that matched the venue id that was passed in
return venueBookings
}

 
// Define a function that builds a string of bandName names. Needs a paramter for bookings array.
const bookedBands = (matchedBookings) => {
    // Define an empty string that will get appended with matching cities
    let bandNames = ""
    
    bandNames = "Bookings:"
    
        for (const booking of matchedBookings) {
           
        for (const band of bands) {
            if (band.id === booking.bandid) {
                // Add the name of the matching city to the string of city names
                bandNames += `\n${band.name} on ${booking.date}`
            }
        }
       // After the loop is done, return the string
        
    }
    return bandNames
}

export const allVenues = () => {
    let html = `<ul>`

    for (const venue of venues) {
        html += `<li id="venue--${venue.id}">${venue.name}</li>`
    }

    html += "</ul>"

    return html
}
