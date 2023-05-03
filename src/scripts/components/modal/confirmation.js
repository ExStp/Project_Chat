import { renderConfirmation } from "./render/renderConfirmation";

function confirmation(event) {
    event.preventDefault();
    renderConfirmation();
}

export { confirmation };
