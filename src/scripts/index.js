import { BUTTONS, INPUTS } from "./components/const.js";
import { sendMessage } from "./components/logic/messaging/sendMessage.js";
import { showMessages } from "./components/logic/messaging/showMessages.js";
import { modalController } from "./components/modal/modalController.js";

document.addEventListener("DOMContentLoaded", () => {
    modalController();
    showMessages();
});

BUTTONS.btnMessage.addEventListener("click", sendMessage);

document.addEventListener("keydown", (event) => {
    if (event.code === "Enter") sendMessage();
    else INPUTS.messageInput.focus();
});

document.addEventListener("submit", (event) => event.preventDefault());
