import { DIALOG, BUTTONS } from "../../const";

function renderConfirmation() {
    DIALOG.modalForm.append(getConfirmationForm());
    DIALOG.purpose.textContent = "Подтверждение";
    BUTTONS.modalClose.dataset.modal = "confirmation";
    DIALOG.modal.showModal();
}

function getConfirmationForm() {
    const form = document.createElement("form");
    form.classList.add("confirmation_form");

    const label = document.createElement("label");
    label.textContent = "Код:";
    label.setAttribute("for", "code");

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "code");
    input.setAttribute("placeholder", "Введите код");
    input.classList.add("dialog_input");
    input.setAttribute("id", "codeInput");

    const button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("value", "Войти");
    button.classList.add("dialog_btn");
    button.setAttribute("id", "confirmCode");

    form.append(label, input, button);

    return form;
}

export { renderConfirmation };
