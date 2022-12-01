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
        name: "Flaming Lips",
        numOfMembers: 99,
        genre: "Grunge",
        formed: 1990
    }    
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
    venueid: 1
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