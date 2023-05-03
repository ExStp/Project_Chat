export const modalSettings_innerHTML = `
    <form class="settings_form">
        <label for="nickname">Имя в чате:</label>
        <input type="text" name="nickname" placeholder="Имя" class="dialog_input" id="nicknameInput">
        <input type="button" value="Готово" class="dialog_btn" id="submitNickname">
    </form>
`;

export const modalAuthorization_innerHTML = `
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

export const BUTTONS = {
    btnQuit: document.querySelector("#btnQuit"),
    btnModalClose: document.querySelector("#btnModalClose"),
    btnOpenSettings: document.querySelector("#btnOpenSettings"),
};

export const DIALOG = {
    modal: document.querySelector("#modal"),
    purpose: document.querySelector(".top_bar__action"),
    modalForm: document.querySelector(".modal__form_container"),
};
