import { modal, modalAuthorization_innerHTML } from "../const.js";

function authorization(event) {
    event.preventDefault();
    modal.showModal();

    const container = document.querySelector(".modal__form_container");
    container.innerHTML = modalAuthorization_innerHTML;
}

export { authorization };
