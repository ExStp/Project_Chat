import getCurrentTime from "../../../utils/formatTime/getCurrentTime";
import { MESSAGE, WINDOWS } from "../../const";

function appendMessage(text) {
    let template = MESSAGE.template.content.cloneNode(true);
    template.querySelector("#messageText").textContent = text;
    template.querySelector("#messageTime").textContent = getCurrentTime();
    template.querySelector('.message_item').classList.add('message_right', 'sended');
    WINDOWS.middle.append(template);
}

export { appendMessage };
