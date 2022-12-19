import { getVenues, getBands, getBookings, getMembers } from "./database.js"

const venues = getVenues()
const bands = getBands()
const unsortedBookings = getBookings()
const members = getMembers()

const sortByDate = (arr) => {
    const sorter = (a,b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
   return arr.sort(sorter);
}
const bookings = sortByDate(unsortedBookings)


document.addEventListener(
    "click", // this is the type of event
    (clickEvent) => {
        //variable for the click event target
        const itemClicked = clickEvent.target
        //logic checking to see if the itemClicked on starts with band
        if (itemClicked.id.startsWith("band")) {
            //if yes split the element id to pull out the bands Primary ID
            const [,bandPrimary] = itemClicked.id.split("--")
            //iterate through the bands database
            for (const band of bands) {
                //logic to test to see if the band id matches the element from the click event
                if(band.id === parseInt(bandPrimary)){
                    //invoke function to filter bookings by band
                    let bookingMatches = matchBooking(band.id)

                    let matchedVenues = bookedVenues(bookingMatches)
                    window.alert(`\n${bandMembers(band.id)} \n${band.name} ${matchedVenues}`)
                }
            }

        }
    }
)
const matchBooking = (bandid) => {
    //declare an empty array to store matching bookings
    const bandBookings = []
    //iterate through each of the bookings
    for (const booking of bookings) {
        //on each iteration of bookings check the band id for the boooking with 
        //the band id passed in that matches the HTML element
        
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

     const bandMembers = (bandId) => {
        let bandString = ""
        for(const member of members)
            if(member.bandId === bandId) {
                bandString += `${member.firstName} ${member.lastName} (${member.role})\n`
        }
        return bandString
     }


 export const allBands = () => {
    let html = `<ul>`

    for (const band of bands) {
        html += `<li id="band--${band.id}">${band.name}</li>`
    }

    html += "</ul>"

    return html
}




