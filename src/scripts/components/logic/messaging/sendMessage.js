import { INPUTS } from "../../const.js";
import { appendMessage } from "./appendMessage.js";

function sendMessage() {
    const text = INPUTS.messageInput.value;
    if (!isValid(text)) return;
    appendMessage(text);


    console.log("send message");
}

function isValid(inputValue) {
    if (inputValue.trim() === "") return false;
    INPUTS.messageInput.value = "";
    return true;
}

export { sendMessage };
