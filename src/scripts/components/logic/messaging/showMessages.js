import { WINDOWS } from "../../const.js";
import { getData } from "../data/getData.js";
import { getMessagesData } from "../data/getMessagesData";
import { appendMessage } from "./appendMessage";

async function showMessages() {
    removeChildElements(WINDOWS.middle);
    const userData = await getData();
    const { messages } = await getMessagesData();
    const messagesData = messages.reverse();

    messagesData.forEach((postData) => {
        appendMessage(postData, userData.email);
    });
    WINDOWS.middle.scrollTop = WINDOWS.middle.scrollHeight;
}

function removeChildElements(parentElement) {
    while (parentElement.hasChildNodes()) {
        parentElement.removeChild(parentElement.lastChild);
    }
}

export { showMessages };
