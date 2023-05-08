import { patchUsername } from "../logic/settings/patchUsername.js";
import { renderSettings } from "./render/renderSettings.js";

function settings(event) {
    event.preventDefault();
    renderSettings();

    const nicknameInput = document.querySelector("#nicknameInput");
    const submitNickname = document.querySelector("#submitNickname");

    submitNickname.addEventListener("click", handlerSubmitNickname);

    function handlerSubmitNickname() {
        const userName = nicknameInput.value;
        patchUsername(userName);
        nicknameInput.value = "";
    }
}

export { settings };
