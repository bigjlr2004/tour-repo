/*
this module contains all of the data, or state, for the application.
it exports three functions that allow other modules
to get copies of state
*/


const database = {
    band: [{
        id: 1,
        name: "Smashing Pumpkins",
        numOfMembers: 4,
        genre: "Metal",
        formed: 1978
    },
    {
        id: 2,
        name: "Lazy Milkmen",
        numOfMembers: 99,
        genre: "Classic Rock",
        formed: 1908
    },
    {
        id: 3,
        name: "Tom Waits",
        numOfMembers: 99,
        genre: "Grunge",
        formed: 1990
    }    
],
bandMembers: [
    {id: 1, firstName: "John", lastName: "Roberts", yearBorn: 1978, role: "trumpet", bandId: 3},
    {id: 2, firstName: "Kurt", lastName: "Kobain", yearBorn: 1977, role: "bass", bandId: 1},
    {id: 1, firstName: "Janis", lastName: "Joplin", yearBorn: 1943, role: "lead vocals", bandId: 2},
    {id: 1, firstName: "John", lastName: "Prine", yearBorn: 1934, role: "lead vocals", bandId: 3},
    {id: 1, firstName: "Dave", lastName: "Mathews", yearBorn: 1970, role: "lead vocals", bandId: 1},
    {id: 1, firstName: "Miles", lastName: "Davis", yearBorn: 1978, role: "trumpet", bandId: 2},
    {id: 1, firstName: "Sonny", lastName: "Rollins", yearBorn: 1963, role: "drums", bandId: 3},
    {id: 1, firstName: "Fred", lastName: "Durst", yearBorn: 1978, role: "bass guitar", bandId: 3},
    {id: 1, firstName: "Jimmy", lastName: "Hendrix", yearBorn: 1969, role: "bass guitar", bandId: 1},
    {id: 1, firstName: "Jimmy", lastName: "Page", yearBorn: 1943, role: "guitar", bandId: 3},
    {id: 1, firstName: "Eddie", lastName: "Murphy", yearBorn: 1954, role: "drums", bandId: 1},
    {id: 1, firstName: "John", lastName: "Bonham", yearBorn: 1952, role: "drums", bandId: 2},
    {id: 1, firstName: "Mazzy", lastName: "Star", yearBorn: 1970, role: "piano", bandId: 3},
    {id: 1, firstName: "Donald", lastName: "Sutherland", yearBorn: 1945, role: "saxaphone", bandId: 2},
    {id: 1, firstName: "Dizzy", lastName: "Gillespie", yearBorn: 1978, role: "saxaphone", bandId: 1},
    {id: 1, firstName: "Fats", lastName: "Navarro", yearBorn: 1945, role: "trumpet", bandId: 1}    
],
venue: [{
    id: 1,
    name: "Melting Pot",
    address: "1400 Boulevard of Broken Dreams",
    maxOccupancy: 1,
    squareFootage: 10000
},
{
    id: 2,
    name: "Madison Circle Garden",
    address: "1999 Gypsy Road",
    maxOccupancy: 101,
    squareFootage: 10
},{
    id: 3,
    name: "Alice in Wonderlands Ampitheater",
    address: "Upside Down Street",
    maxOccupancy: 999999,
    squareFootage: 1
}],
booking : [{
    id: 1,
    date: "12/11/2022",
    bandid: 1,
    venueid: 2
},
{
    id: 2,
    date: "12/22/2022",
    bandid: 3,
    venueid: 3
}, {
    id: 3,
    date: "06/01/2023",
    bandid: 2,
    venueid: 3
},{
    id: 4,
    date: "12/11/2022",
    bandid: 3,
    venueid: 1
},
{
    id: 5,
    date: "12/2/2022",
    bandid: 2,
    venueid: 1
}, {
    id: 6,
    date: "07/13/2023",
    bandid: 1,
    venueid: 1
}

]

}

export const getBands = () => {
    return database.band.map(bands => ({...bands}))
}

export const getVenues = () => {
    return database.venue.map(venues => ({...venues}))
}

export const getBookings = () => {
    return database.booking.map(bookings => ({...bookings}))
}

export const getMembers = () => {
    return database.bandMembers.map(members => ({...members}))
}
