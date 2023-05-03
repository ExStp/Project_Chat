import { DIALOG } from "../../const";

export function closeModal() {
    DIALOG.modal.close();
    const container = document.querySelector(".modal__form_container");
    container.querySelectorAll("*").forEach((item) => item.remove());
}
