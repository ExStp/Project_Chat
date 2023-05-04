import { renderAuthorization } from "./render/renderAuthorization.js";
import { confirmation } from "./confirmation.js";
import { closeModal } from "./render/closeModal.js";

function authorization(event) {
    event.preventDefault();
    renderAuthorization();

    const sendCode = document.querySelector("#sendCode");
    sendCode.addEventListener("click", handleSendCode);

    function handleSendCode() {
        sendCode.removeEventListener("click", handleSendCode);
        closeModal();
        confirmation(event);
    }
}

export { authorization };
