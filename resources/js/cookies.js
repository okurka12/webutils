const cookie_style = "z-index: 3; position: absolute; height: 15vh;"

const cookie_id = "cookie-img"
const green_creature_id = "green-round-creature-img"
const trash_can_id = "trash-can-img"

const green_creature_alt_src = "/resources/img/green-round-creature-satisfied.webp"
const trash_can_alt_src = "/resources/img/trash-can-with-cookie.webp"

let decision_made = false

function update_cookie_position(event) {
    const element = document.getElementById(cookie_id);

    if (element == null) return

    let local_style = cookie_style

    const x = event.x - 0.05 * window.innerWidth
    const y = window.scrollY + event.y - 0.05 * window.innerWidth
    local_style += `left: ${x}px;`
    local_style += `top: ${y}px;`

    element.setAttribute("style", local_style)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function check_mouse() {
    const element = document.getElementById(cookie_id);

    if (element == null) return

    element.style.zIndex = 1;
    await sleep(1)
    element.style.zIndex = 3;
}

function delete_cookie() {
    const element = document.getElementById(cookie_id)
    if (element != null) {
        element.remove()
    }
}

window.setInterval(check_mouse)

document.addEventListener("mousemove", update_cookie_position)

document.addEventListener("DOMContentLoaded", () => {

document.getElementById(trash_can_id).addEventListener("mouseover", () => {
    if (!decision_made) {
        console.log("eyo")
        delete_cookie()
        document.getElementById(trash_can_id).setAttribute("src", trash_can_alt_src)
        decision_made = true
    }
})

document.getElementById(green_creature_id).addEventListener("mouseover", () => {
    if (!decision_made) {
        console.log("eyo 2")
        delete_cookie()
        document.getElementById(green_creature_id).setAttribute("src", green_creature_alt_src)
        decision_made = true
    }
})

document.getElementById(cookie_id).setAttribute(
    "style", `${cookie_style}; top: 2em; left: 40vw`
)

})  // domcontentloaded
