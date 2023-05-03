import { DIALOG } from "../const.js";
import { renderSettings } from "./render/renderSettings.js";

function settings(event) {
    event.preventDefault();
    renderSettings();
}

export { settings };
