import { socket } from "../../../index.js";
import { INPUTS } from "../../const.js";
import { getData } from "../data/getData.js";

async function sendMessage() {
    const text = INPUTS.messageInput.value;
    if (!isValid(text)) return;

    socket.send(JSON.stringify({ text: text }));

    // const data = await getData();
    // console.log("🚀 ~ file: sendMessage.js:10 ~ sendMessage ~ data:", data);
}

function isValid(inputValue) {
    if (inputValue.trim() === "") return false;
    INPUTS.messageInput.value = "";
    return true;
}

export { sendMessage };
