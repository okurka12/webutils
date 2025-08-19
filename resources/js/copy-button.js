/*

HOW TO USE:
<button class="copy-button" textid="text-to-copy"></button>

TODO:
optional text attribute for text inside the button

*/

const CHECKMARK_ICON =
    "https://webutils.vitapavlik.cz/resources/icons/green-checkmark.svg"

const COPY_ICON =
    "https://webutils.vitapavlik.cz/resources/icons/copy.svg"

const COPY_BUTTON_STYLESHEET =
    "https://webutils.vitapavlik.cz/resources/css/copy-button.css"

const CLASS_NAME = "copy-button"
const ATTR_NAME = "textid"

const DELAY = 2000

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function copy_button_handler(id) {
    const button_element = document.getElementById(`${id}-button`)
    const text_element_id = button_element.getAttribute(ATTR_NAME)
    const text_element = document.getElementById(text_element_id);
    const img_element = document.getElementById(`${id}-img`);
    navigator.clipboard.writeText(text_element.innerText);
    img_element.setAttribute("src", CHECKMARK_ICON);
    await sleep(DELAY);
    img_element.setAttribute("src", COPY_ICON);
}


function render_buttons() {
    const buttons = document.getElementsByClassName(CLASS_NAME)

    const link_element = document.createElement("link")
    link_element.setAttribute("rel", "stylesheet")
    link_element.setAttribute("href", COPY_BUTTON_STYLESHEET)
    document.head.appendChild(link_element)

    for (let i = 0; i < buttons.length; i++) {

        let element = buttons[i];
        const id = crypto.randomUUID();  // str
        element.innerHTML = `<img src=${COPY_ICON} id="${id}-img">`
        element.setAttribute("id", `${id}-button`)
        element.setAttribute("onclick", `copy_button_handler('${id}')`)

        if (element.tagName != "button")
            continue


    }
}

document.addEventListener("DOMContentLoaded", render_buttons)
