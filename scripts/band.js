import { getBands } from "./database.js"

const bands = getBands()


 export const allBands = () => {
    let html = `<ul>`

    for (const band of bands) {
        html += `<li id="band--${band.id}">${band.name}</li>`
    }

    html += "</ul>"

    return html
}

