// import getCurrentTime from "../../../utils/formatTime/getCurrentTime";
import { format } from "date-fns";
import { MESSAGE, WINDOWS } from "../../const";

function appendMessage(postData) {
    console.log(postData);
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
    template.querySelector("#messageText").textContent = text;
    template.querySelector("#messageUsername").textContent = name;
    template.querySelector("#messageTime").textContent = formattedCreatedAt;
    template.querySelector(".message_item").classList.add("message_left", "delivered");
    template.querySelector(".message_item").dataset.id = _id;
    WINDOWS.middle.append(template);
}

export { appendMessage };
