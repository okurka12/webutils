const style = "z-index: 1; position: absolute; width: 10vw;"

function update_cookie_position(event) {
    const element = document.getElementById("cookie-img");

    if (element == null) return

    let local_style = style

    const x = event.x - 0.05 * window.innerWidth
    const y = window.scrollY + event.y - 0.05 * window.innerWidth
    local_style += `left: ${x}px;`
    local_style += `top: ${y}px;`

    element.setAttribute("style", local_style)
}

document.addEventListener("mousemove", update_cookie_position)
