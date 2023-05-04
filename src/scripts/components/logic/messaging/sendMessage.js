import { INPUTS } from "../../const.js";

function sendMessage() {
    const value = INPUTS.messageInput.value;
    if (!isValid(value)) return;
    INPUTS.messageInput.value = "";

    console.log("send message");
}

function isValid(inputValue) {
    if (inputValue.trim() === "") return false;
    return true;
}

export { sendMessage };
