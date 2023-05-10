export const BUTTONS = {
    quit: document.querySelector("#btnQuit"),
    modalClose: document.querySelector("#btnModalClose"),
    openSettings: document.querySelector("#btnOpenSettings"),
    btnMessage: document.querySelector("#btnMessage"),
};

export const DIALOG = {
    modal: document.querySelector("#modal"),
    purpose: document.querySelector(".top_bar__action"),
    modalForm: document.querySelector(".modal__form_container"),
};

export const WINDOWS = {
    top: document.querySelector("#top_block"),
    middle: document.querySelector("#middle_block"),
    bottom: document.querySelector("#bottom_block"),
};

export const INPUTS = {
    messageInput: document.querySelector("#messageInput"),
};

export const MESSAGE = {
    template: document.querySelector("#messageTemplate"),
};

export const URL = {
    api: "https://edu.strada.one/api/user",
    userData: "https://edu.strada.one/api/user/me",
    messagesData: "https://edu.strada.one/api/messages/",
    socket: "wss://edu.strada.one/websockets?",
};
