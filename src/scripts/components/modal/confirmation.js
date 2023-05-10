import { saveTokenCookie } from "../logic/confirmation/saveTokenCookie";
import { renderConfirmation } from "./render/renderConfirmation";

function confirmation(event) {
    event.preventDefault();
    renderConfirmation();

    const codeInput = document.querySelector("#codeInput");
    const confirmCode = document.querySelector("#confirmCode");

    confirmCode.addEventListener("click", handleConfirmCode);

    function handleConfirmCode() {
        const token = removeSpaces(codeInput.value);
        if (token.trim() === "") return;
        codeInput.value = "";
        codeInput.placeHolder = "Успех, Вы авторизованы!";
        saveTokenCookie(token);
    }
}

function removeSpaces(str) {
    return str.replace(/\s/g, "");
}

export { confirmation };
