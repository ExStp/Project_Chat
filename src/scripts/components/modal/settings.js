import { modal, modalSettings_innerHTML } from "../const.js";

function settings(event) {
    event.preventDefault();
    modal.showModal();

    const container = document.querySelector(".modal__form_container");
    container.innerHTML = modalSettings_innerHTML;
}

export { settings };
