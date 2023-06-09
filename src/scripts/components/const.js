"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URL = exports.MESSAGE = exports.INPUTS = exports.WINDOWS = exports.DIALOG = exports.BUTTONS = void 0;
exports.BUTTONS = {
    quit: document.querySelector("#btnQuit"),
    modalClose: document.querySelector("#btnModalClose"),
    openSettings: document.querySelector("#btnOpenSettings"),
    btnMessage: document.querySelector("#btnMessage"),
};
exports.DIALOG = {
    modal: document.querySelector("#modal"),
    purpose: document.querySelector(".top_bar__action"),
    modalForm: document.querySelector(".modal__form_container"),
};
exports.WINDOWS = {
    top: document.querySelector("#top_block"),
    middle: document.querySelector("#middle_block"),
    bottom: document.querySelector("#bottom_block"),
};
exports.INPUTS = {
    messageInput: document.querySelector("#messageInput"),
};
exports.MESSAGE = {
    template: document.querySelector("#messageTemplate"),
};
exports.URL = {
    api: "https://edu.strada.one/api/user",
    userData: "https://edu.strada.one/api/user/me",
    messagesData: "https://edu.strada.one/api/messages/",
    socket: "wss://edu.strada.one/websockets?",
};
