import { getVenues } from "./database.js"

const venues = getVenues()


 export const allVenues = () => {
    let html = `<ul>`

    for (const venue of venues) {
        html += `<li id="venue--${venue.id}">${venue.name}</li>`
    }

    html += "</ul>"

    return html
}

