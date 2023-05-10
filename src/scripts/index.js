import Cookies from "js-cookie";
import { BUTTONS, INPUTS, URL, WINDOWS } from "./components/const.js";
import { appendMessage } from "./components/logic/messaging/appendMessage.js";
import { sendMessage } from "./components/logic/messaging/sendMessage.js";
import { showMessages } from "./components/logic/messaging/showMessages.js";
import { modalController } from "./components/modal/modalController.js";

const token = Cookies.get("StradaToken");
export const socket = new WebSocket(`${URL.socket}${token}`);

socket.onopen = function () {
    console.log("[open] Соединение установлено");
};

socket.onclose = function () {
    location.reload();
};

socket.onerror = function (error) {
    alert(`[error] ${error}`);
};
socket.onmessage = function (event) {
    const postData = JSON.parse(event.data);
    appendMessage(postData);
    WINDOWS.middle.scrollTop = WINDOWS.middle.scrollHeight;
    // showMessages();
};

document.addEventListener("DOMContentLoaded", () => {
    modalController();
    showMessages();

    BUTTONS.btnMessage.addEventListener("click", sendMessage);

    document.addEventListener("keydown", (event) => {
        if (event.code === "Enter") sendMessage();
        else INPUTS.messageInput.focus();
    });

    document.addEventListener("submit", (event) => event.preventDefault());
});
