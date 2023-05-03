import { BUTTONS, DIALOG } from "./components/const.js";
import { settings } from "./components/modal/settings.js";
import { confirmation } from "./components/modal/confirmation.js";
import { authorization } from "./components/modal/authorization.js";

BUTTONS.btnOpenSettings.addEventListener("click", (event) => {
    settings(event);
});

BUTTONS.btnQuit.addEventListener("click", (event) => {
    authorization(event);
});
