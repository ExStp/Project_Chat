import { INPUTS } from "../../const.js";
import { getData } from "../data/getData.js";
import { appendMessage } from "./appendMessage.js";

async function sendMessage() {
    const text = INPUTS.messageInput.value;
    if (!isValid(text)) return;
    // appendMessage(text);
    const data = await getData();
    console.log("🚀 ~ file: sendMessage.js:10 ~ sendMessage ~ data:", data)
}

function isValid(inputValue) {
    if (inputValue.trim() === "") return false;
    INPUTS.messageInput.value = "";
    return true;
}

export { sendMessage };
