import { DIALOG } from "../../const.js";

function renderAuthorization() {
    DIALOG.modalForm.append(getAuthorizationForm());
    DIALOG.purpose.textContent = "Авторизация";
    DIALOG.modal.showModal();
}

function getAuthorizationForm() {
    const form = document.createElement("form");
    form.classList.add("authorization_form");

    const label = document.createElement("label");
    label.setAttribute("for", "code");
    label.textContent = "Почта:";

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "code");
    input.setAttribute("placeholder", "Введите почту");
    input.classList.add("dialog_input");
    input.setAttribute("id", "emailInput");

    const divBtnsWrapper = document.createElement("div");
    divBtnsWrapper.classList.add("authorization_btns_wrapper");

    const btnGetCode = document.createElement("input");
    btnGetCode.setAttribute("type", "button");
    btnGetCode.setAttribute("value", "Получить код");
    btnGetCode.classList.add("dialog_btn");
    btnGetCode.setAttribute("id", "getCode");

    const btnSendCode = document.createElement("input");
    btnSendCode.setAttribute("type", "button");
    btnSendCode.setAttribute("value", "Ввести код");
    btnSendCode.classList.add("dialog_btn");
    btnSendCode.setAttribute("id", "sendCode");

    divBtnsWrapper.append(btnGetCode, btnSendCode);
    form.append(label, input, divBtnsWrapper);

    return form;
}

export { renderAuthorization };
