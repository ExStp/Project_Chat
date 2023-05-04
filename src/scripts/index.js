import { BUTTONS, INPUTS } from "./components/const.js";
import { sendMessage } from "./components/logic/messaging/sendMessage.js";
import { modalController } from "./components/modal/modalController.js";

document.addEventListener('DOMContentLoaded', modalController);

BUTTONS.btnMessage.addEventListener("click", sendMessage);

document.addEventListener("keydown", (event) => {
    if (event.code === "Enter") sendMessage();
    else INPUTS.messageInput.focus();
});
