import { BUTTONS } from "../const";
import { authorization } from "./authorization";
import { closeModal } from "./render/closeModal";
import { settings } from "./settings";

function modalController() {
    BUTTONS.openSettings.addEventListener("click", (event) => {
        settings(event);
    });

    BUTTONS.quit.addEventListener("click", (event) => {
        authorization(event);
    });

    BUTTONS.modalClose.addEventListener("click", handlerModalClose);
}

function handlerModalClose() {
    const ALLOWED_PURPOSES = ["settings", "authorization", "confirmation"];

    const dialogPurpose = BUTTONS.modalClose.dataset.modal;
    if (ALLOWED_PURPOSES.includes(dialogPurpose)) {
        closeModal();
    }
}
export { modalController };
