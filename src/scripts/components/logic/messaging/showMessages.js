import { WINDOWS } from "../../const.js";
import { getMessagesData } from "../data/getMessagesData";
import { appendMessage } from "./appendMessage";

async function showMessages() {
    removeChildElements(WINDOWS.middle);
    const { messages } = await getMessagesData();
    const messagesData = messages.reverse();
    messagesData.forEach((postData) => {
        appendMessage(postData);
    });
    WINDOWS.middle.scrollTop = WINDOWS.middle.scrollHeight;
}

function removeChildElements(parentElement) {
    while (parentElement.hasChildNodes()) {
        parentElement.removeChild(parentElement.lastChild);
    }
}

export { showMessages };
