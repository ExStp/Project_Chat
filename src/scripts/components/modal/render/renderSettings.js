import { DIALOG, BUTTONS } from "../../const.js";
import { closeModal } from "./closeModal.js";

function renderSettings() {
    DIALOG.modalForm.append(getSettingsForm());
    DIALOG.purpose.textContent = "Настройки";
    DIALOG.modal.showModal();
    BUTTONS.modalClose.dataset.modal = "settings";
}

function getSettingsForm() {
    const form = document.createElement("form");
    form.classList.add("settings_form");

    const label = document.createElement("label");
    label.setAttribute("for", "nickname");
    label.textContent = "Имя в чате:";

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "nickname");
    input.setAttribute("placeholder", "Имя");
    input.classList.add("dialog_input");
    input.setAttribute("id", "nicknameInput");

    const button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("value", "Готово");
    button.classList.add("dialog_btn");
    button.setAttribute("id", "submitNickname");

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(button);

    return form;
}

export { renderSettings };
