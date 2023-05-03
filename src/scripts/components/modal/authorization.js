import { DIALOG } from "../const.js";
import { renderAuthorization } from "./render/renderAuthorization.js";

function authorization(event) {
    event.preventDefault();
    renderAuthorization();
}

export { authorization };
