import { renderAuthorization } from "./render/renderAuthorization.js";
import { confirmation } from "./confirmation.js";
import { closeModal } from "./render/closeModal.js";
import { getToken } from "../logic/authorization/getToken.js";

function authorization(event) {
    event.preventDefault();
    renderAuthorization();

    const sendCode = document.querySelector("#sendCode");
    const emailInput = document.querySelector("#emailInput");
    const getCode = document.querySelector("#getCode");
    const loader = document.querySelector(".loader");

    getCode.addEventListener("click", handleGetCode);

    function handleGetCode(event) {
        event.preventDefault();
        const email = emailInput.value;
        if (!isValidEmail(email)) return;
        loader.classList.add("inProgress");
        // TODO: Улучшить вывод сообщения о регистрации
        getToken(email).then(() => {
            emailInput.placeholder = "Вы успешно зарегистрированы!";
            emailInput.value = "";
            loader.classList.remove("inProgress");
        });
    }

    sendCode.addEventListener("click", handleSendCode);

    function handleSendCode() {
        sendCode.removeEventListener("click", handleSendCode);
        closeModal();
        confirmation(event);
    }
}

function isValidEmail(email) {
    if (email.trim() === "") return false;
    const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    return emailRegExp.test(email);
}

export { authorization };
