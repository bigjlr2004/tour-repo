 import { allBands } from "./band.js"
import { allVenues } from "./venue.js"
import { displayBookings } from "./booking.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>SAMANTHA'S BOOKINGS</h1>
<article class="details">
    <section class="top_row">
        <h2>Bookings</h2>
        ${displayBookings()}
    </section>
    </article>
    <article class="details">
    <section>
        <h2>Venues</h2>
         ${allVenues()}
    </section>

    <section>
        <h2>Bands</h2>
         ${allBands()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML
