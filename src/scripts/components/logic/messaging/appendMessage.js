// import getCurrentTime from "../../../utils/formatTime/getCurrentTime";
import { format } from "date-fns";
import { MESSAGE, WINDOWS } from "../../const";

function appendMessage(postData, userEmail) {
    const {
        __v,
        _id,
        createdAt,
        text,
        updatedAt,
        user: { email, name },
    } = postData;

    const formattedCreatedAt = format(new Date(createdAt), "HH:mm");
    const template = MESSAGE.template.content.cloneNode(true);
    const messageWrapper = template.querySelector(".message_item");
    const messageText = template.querySelector("#messageText");
    const messageUsername = template.querySelector("#messageUsername");
    const messageTime = template.querySelector("#messageTime");

    messageText.textContent = text;
    messageUsername.textContent = name;
    messageTime.textContent = formattedCreatedAt;
    messageWrapper.dataset.id = _id;
    if (email === userEmail) {
        messageWrapper.classList.add("message_right", "delivered");
    } else {
        messageWrapper.classList.add("message_left", "delivered");
    }
    WINDOWS.middle.append(template);
}

export { appendMessage };
