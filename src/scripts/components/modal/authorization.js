import { DIALOG, BUTTONS } from "../const.js";
import { renderAuthorization } from "./render/renderAuthorization.js";
import { confirmation } from "./confirmation.js";
import { closeModal } from "./render/closeModal.js";

function authorization(event) {
    event.preventDefault();
    renderAuthorization();
    const sendCode = document.querySelector('#sendCode');
    sendCode.addEventListener("click", (event) => {
        closeModal();
        confirmation(event);
    });
}

export { authorization };
