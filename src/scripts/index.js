import { settings } from "./components/modal/settings.js";
import { authorization } from "./components/modal/authorization.js";
import { btnOpenSettings, btnModalClose, modal, btnQuit } from "./components/const.js";

btnOpenSettings.addEventListener("click", (event) => {
    settings(event);
});

btnQuit.addEventListener('click', (event) => {
    authorization(event);
})

btnModalClose.addEventListener("click", () => {
    modal.close();
    const container = document.querySelector(".modal__form_container");
    container.querySelectorAll("*").forEach((item) => item.remove());
});
