import { BUTTONS, DIALOG } from "../../const";

export function closeModal() {
    DIALOG.modalForm.querySelectorAll("*").forEach((item) => item.remove());
    DIALOG.purpose.textContent = '';
    BUTTONS.modalClose.removeAttribute('data-modal');
    DIALOG.modal.close();
}
