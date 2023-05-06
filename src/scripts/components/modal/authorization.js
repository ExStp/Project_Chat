import { renderAuthorization } from "./render/renderAuthorization.js";
import { confirmation } from "./confirmation.js";
import { closeModal } from "./render/closeModal.js";
import { getToken } from "../logic/authorization/getToken.js";

function authorization(event) {
    event.preventDefault();
    renderAuthorization();

    const sendCodeBtn = document.querySelector("#sendCode");
    const emailInput = document.querySelector("#emailInput");
    const getCodeBtn = document.querySelector("#getCode");
    const loader = document.querySelector(".loader");

    const Loader = {
        show: () => loader.classList.add("inProgress"),
        hide: () => loader.classList.remove("inProgress"),
    };

    if (!sendCodeBtn || !emailInput || !getCodeBtn || !loader) {
        alert("Ошибка при отображении окна, требуется перезагрузка страницы");
        location.reload();
        return;
    }

    getCodeBtn.addEventListener("click", handleGetCode);

    function handleGetCode(event) {
        event.preventDefault();
        const email = emailInput.value;
        Loader.show();
        getToken(email).then((responseOK) => {
            if (responseOK) {
                emailInput.placeholder = "Вы успешно зарегистрированы!";
            } else {
                emailInput.placeholder = "Ошибка, перезагрузите страницу";
            }
            emailInput.value = "";
            Loader.hide();
        });
    }

    sendCodeBtn.addEventListener("click", handleSendCode);

    function handleSendCode() {
        sendCodeBtn.removeEventListener("click", handleSendCode);
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
