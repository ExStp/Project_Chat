import { WINDOWS } from "../../const.js";
import { getMessagesData } from "../data/getMessagesData";
import { appendMessage } from "./appendMessage";

async function showMessages() {
    console.log("show");
    const { messages } = await getMessagesData();
    messages.forEach((postData) => {
        appendMessage(postData);
    });
    WINDOWS.middle.scrollTop = WINDOWS.middle.scrollHeight;
}

export { showMessages };
