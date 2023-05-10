import { socket } from "../../../index.js";
import { INPUTS } from "../../const.js";

async function sendMessage() {
    const text = INPUTS.messageInput.value;
    if (!isValid(text)) return;

    socket.send(JSON.stringify({ text: text }));
}

function isValid(inputValue) {
    if (inputValue.trim() === "") return false;
    INPUTS.messageInput.value = "";
    return true;
}

export { sendMessage };
