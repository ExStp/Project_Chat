const modalSettings_innerHTML = `
    <form class="settings_form">
        <label for="nickname">Имя в чате:</label>
        <input type="text" name="nickname" placeholder="Имя" class="dialog_input" id="nicknameInput">
        <input type="button" value="Готово" class="dialog_btn" id="submitNickname">
    </form>
`;

const modalAuthorization_innerHTML = `
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

const btnOpenSettings = document.querySelector("#btnOpenSettings");
const btnModalClose = document.querySelector("#btnModalClose");
const btnQuit = document.querySelector("#btnQuit");
const modal = document.querySelector("#modal");

export { modalSettings_innerHTML, modalAuthorization_innerHTML };
export { modal, btnOpenSettings, btnModalClose, btnQuit };
