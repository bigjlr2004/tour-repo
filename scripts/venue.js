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
                    const bookingMatches = matchBooking(venue.id)
                    const bandsString = bookedBands(venue, bookingMatches)
                    window.alert(`${venue.name}  ${bandsString} `)
                }

            }

        }
    }
)


const matchBooking = (venueid) => {
    //declare an empty array to store matching bookings
    const venueBookings = []
    for (const booking of bookings) {
        
        if(booking.venueid === venueid) {
            venueBookings.push(booking)
        }
    }
return venueBookings
}

 export const allVenues = () => {
    let html = `<ul>`

    for (const venue of venues) {
        html += `<li id="venue--${venue.id}">${venue.name}</li>`
    }

    html += "</ul>"

    return html
}

// Define a function that builds a string of bandName names. Needs a paramter for bookings array.
const bookedBands = (matchedVenue,matchedBookings) => {
    // Define an empty string that will get appended with matching cities
    let bandNames = ""
    

     if (matchedBookings.length  === 1) {
        for (const booking of matchedBookings) {
            bandNames = "Bookings:"
        for (const bandName of bands) {
            if (bandName.id === booking.bandid) {
                // Add the name of the matching city to the string of city names
                bandNames += `\n${bandName.name} on ${booking.date}`
            }
        }
       // After the loop is done, return the string
        
    }
    return bandNames
}else {
    bandNames ="Bookings:"
    for (const booking of matchedBookings) {

        for (const bandName of bands) {
            if (bandName.id === booking.bandid) {
                // Add the name of the matching bandName to the string of bandName names
                bandNames += `\n${bandName.name} on ${booking.date}`
            }
            
        }
       // bandNames += ` and `
       // After the loop is done, return the string
        
    }
    // return bandNames = bandName.substring(0,bandName.length -4)
    return bandNames 
}   
}