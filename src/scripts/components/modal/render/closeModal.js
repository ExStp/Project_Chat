import { DIALOG } from "../../const";

export function closeModal() {
    DIALOG.modalForm.querySelectorAll("*").forEach((item) => item.remove());
    DIALOG.modal.close();
}
