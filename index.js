const $aa2c36434969acf6$export$afaea5e40f57df2 = `
    <form class="settings_form">
        <label for="nickname">Имя в чате:</label>
        <input type="text" name="nickname" placeholder="Имя" class="dialog_input" id="nicknameInput">
        <input type="button" value="Готово" class="dialog_btn" id="submitNickname">
    </form>
`;
const $aa2c36434969acf6$export$d34645870493dd89 = `
    <form class="authorization_form">
        <label for="code">Почта:</label>
        <input type="text" name="code" placeholder="Введите почту"
            class="dialog_input" id="emailInput">
        <div class="authorization_btns_wrapper">
            <input type="button" value="Получить код" class="dialog_btn"
                id="getCode">
            <input type="button" value="Ввести код" class="dialog_btn"
                id="sendCode">
        </div>
    </form>
`;
const $aa2c36434969acf6$export$109cfadbd695f9cc = `
    <form class="confirmation_form">
        <label for="code">Код:</label>
        <input type="text" name="code" placeholder="Введите код"
            class="dialog_input" id="codeInput">
        <input type="button" value="Войти"
            class="dialog_btn"
            id="confirmCode">
    </form>
`;
const $aa2c36434969acf6$export$e01aea21bc2dabea = {
    quit: document.querySelector("#btnQuit"),
    modalClose: document.querySelector("#btnModalClose"),
    openSettings: document.querySelector("#btnOpenSettings"),
    sendCode: document.querySelector("#sendCode")
};
const $aa2c36434969acf6$export$f99739dbfcd2e015 = {
    modal: document.querySelector("#modal"),
    purpose: document.querySelector(".top_bar__action"),
    modalForm: document.querySelector(".modal__form_container")
};





function $300a755e4f4d3f3a$export$3f6fecd573f3fa48() {
    (0, $aa2c36434969acf6$export$f99739dbfcd2e015).modalForm.querySelectorAll("*").forEach((item)=>item.remove());
    (0, $aa2c36434969acf6$export$f99739dbfcd2e015).purpose.textContent = "";
    (0, $aa2c36434969acf6$export$e01aea21bc2dabea).modalClose.removeAttribute("data-modal");
    (0, $aa2c36434969acf6$export$f99739dbfcd2e015).modal.close();
}


function $6851a77d576bdf23$export$b14c3951ea30493a() {
    (0, $aa2c36434969acf6$export$f99739dbfcd2e015).modalForm.append($6851a77d576bdf23$var$getSettingsForm());
    (0, $aa2c36434969acf6$export$f99739dbfcd2e015).purpose.textContent = "Настройки";
    (0, $aa2c36434969acf6$export$f99739dbfcd2e015).modal.showModal();
    (0, $aa2c36434969acf6$export$e01aea21bc2dabea).modalClose.dataset.modal = "settings";
}
function $6851a77d576bdf23$var$getSettingsForm() {
    const form = document.createElement("form");
    form.classList.add("settings_form");
    const label = document.createElement("label");
    label.setAttribute("for", "nickname");
    label.textContent = "Имя в чате:";
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "nickname");
    input.setAttribute("placeholder", "Имя");
    input.classList.add("dialog_input");
    input.setAttribute("id", "nicknameInput");
    const button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("value", "Готово");
    button.classList.add("dialog_btn");
    button.setAttribute("id", "submitNickname");
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(button);
    return form;
}


function $81cafc6de6d18695$export$a5a6e0b888b2c992(event) {
    event.preventDefault();
    (0, $6851a77d576bdf23$export$b14c3951ea30493a)();
}





function $d5115a975cb640cb$export$f1fe2e22c5740ca() {
    (0, $aa2c36434969acf6$export$f99739dbfcd2e015).modalForm.append($d5115a975cb640cb$var$getAuthorizationForm());
    (0, $aa2c36434969acf6$export$f99739dbfcd2e015).purpose.textContent = "Авторизация";
    (0, $aa2c36434969acf6$export$e01aea21bc2dabea).modalClose.dataset.modal = "authorization";
    (0, $aa2c36434969acf6$export$f99739dbfcd2e015).modal.showModal();
}
function $d5115a975cb640cb$var$getAuthorizationForm() {
    const form = document.createElement("form");
    form.classList.add("authorization_form");
    const label = document.createElement("label");
    label.setAttribute("for", "code");
    label.textContent = "Почта:";
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "code");
    input.setAttribute("placeholder", "Введите почту");
    input.classList.add("dialog_input");
    input.setAttribute("id", "emailInput");
    const divBtnsWrapper = document.createElement("div");
    divBtnsWrapper.classList.add("authorization_btns_wrapper");
    const btnGetCode = document.createElement("input");
    btnGetCode.setAttribute("type", "button");
    btnGetCode.setAttribute("value", "Получить код");
    btnGetCode.classList.add("dialog_btn");
    btnGetCode.setAttribute("id", "getCode");
    const btnSendCode = document.createElement("input");
    btnSendCode.setAttribute("type", "button");
    btnSendCode.setAttribute("value", "Ввести код");
    btnSendCode.classList.add("dialog_btn");
    btnSendCode.setAttribute("id", "sendCode");
    divBtnsWrapper.append(btnGetCode, btnSendCode);
    form.append(label, input, divBtnsWrapper);
    return form;
}



function $aca8bf848eb020e4$export$3ae89cce2060913a() {
    (0, $aa2c36434969acf6$export$f99739dbfcd2e015).modalForm.append($aca8bf848eb020e4$var$getConfirmationForm());
    (0, $aa2c36434969acf6$export$f99739dbfcd2e015).purpose.textContent = "Подтверждение";
    (0, $aa2c36434969acf6$export$e01aea21bc2dabea).modalClose.dataset.modal = "confirmation";
    (0, $aa2c36434969acf6$export$f99739dbfcd2e015).modal.showModal();
}
function $aca8bf848eb020e4$var$getConfirmationForm() {
    const form = document.createElement("form");
    form.classList.add("confirmation_form");
    const label = document.createElement("label");
    label.textContent = "Код:";
    label.setAttribute("for", "code");
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "code");
    input.setAttribute("placeholder", "Введите код");
    input.classList.add("dialog_input");
    input.setAttribute("id", "codeInput");
    const button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("value", "Войти");
    button.classList.add("dialog_btn");
    button.setAttribute("id", "confirmCode");
    form.append(label, input, button);
    return form;
}


function $911df6928097a9d0$export$3263ea6cb482c009(event) {
    event.preventDefault();
    (0, $aca8bf848eb020e4$export$3ae89cce2060913a)();
}



function $b48a95acaeb35050$export$38d83a5cf994930a(event) {
    event.preventDefault();
    (0, $d5115a975cb640cb$export$f1fe2e22c5740ca)();
    const sendCode = document.querySelector("#sendCode");
    sendCode.addEventListener("click", handleSendCode);
    function handleSendCode() {
        sendCode.removeEventListener("click", handleSendCode);
        (0, $300a755e4f4d3f3a$export$3f6fecd573f3fa48)();
        (0, $911df6928097a9d0$export$3263ea6cb482c009)(event);
    }
}



(0, $aa2c36434969acf6$export$e01aea21bc2dabea).openSettings.addEventListener("click", (event)=>{
    (0, $81cafc6de6d18695$export$a5a6e0b888b2c992)(event);
});
(0, $aa2c36434969acf6$export$e01aea21bc2dabea).quit.addEventListener("click", (event)=>{
    (0, $b48a95acaeb35050$export$38d83a5cf994930a)(event);
});
(0, $aa2c36434969acf6$export$e01aea21bc2dabea).modalClose.addEventListener("click", $c71fa76953298963$var$handlerModalClose);
function $c71fa76953298963$var$handlerModalClose() {
    const ALLOWED_PURPOSES = [
        "settings",
        "authorization",
        "confirmation"
    ];
    const dialogPurpose = (0, $aa2c36434969acf6$export$e01aea21bc2dabea).modalClose.dataset.modal;
    if (ALLOWED_PURPOSES.includes(dialogPurpose)) (0, $300a755e4f4d3f3a$export$3f6fecd573f3fa48)();
}


//# sourceMappingURL=index.js.map
