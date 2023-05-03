import { BUTTONS, DIALOG } from "./components/const.js";
import { settings } from "./components/modal/settings.js";
// import { confirmation } from "./components/modal/confirmation.js";
import { authorization } from "./components/modal/authorization.js";
import { closeModal } from "./components/modal/render/closeModal.js";

BUTTONS.openSettings.addEventListener("click", (event) => {
    settings(event);
});

BUTTONS.quit.addEventListener("click", (event) => {
    authorization(event);
});

BUTTONS.modalClose.addEventListener("click", handlerModalClose);

function handlerModalClose() {
    const ALLOWED_PURPOSES = ["settings", "authorization", "confirmation"];

    const dialogPurpose = BUTTONS.modalClose.dataset.modal;
    if (ALLOWED_PURPOSES.includes(dialogPurpose)) {
        closeModal();
    }
}
