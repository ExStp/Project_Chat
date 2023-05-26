interface IButtons {
    quit: HTMLButtonElement | null;
    modalClose: HTMLButtonElement | null;
    openSettings: HTMLButtonElement | null;
    btnMessage: HTMLButtonElement | null;
}

interface IDialog {
    modal: HTMLDivElement | null;
    purpose: HTMLDivElement | null;
    modalForm: HTMLDivElement | null;
}

interface IWindows {
    top: HTMLElement | null;
    middle: HTMLElement | null;
    bottom: HTMLElement | null;
}

interface IInputs {
    messageInput: HTMLInputElement | null;
}

interface IMessage {
    template: HTMLElement | null;
}

interface IURLs {
    api: string;
    userData: string;
    messagesData: string;
    socket: string;
}

export const BUTTONS: IButtons = {
    quit: document.querySelector("#btnQuit"),
    modalClose: document.querySelector("#btnModalClose"),
    openSettings: document.querySelector("#btnOpenSettings"),
    btnMessage: document.querySelector("#btnMessage"),
};

export const DIALOG: IDialog = {
    modal: document.querySelector("#modal"),
    purpose: document.querySelector(".top_bar__action"),
    modalForm: document.querySelector(".modal__form_container"),
};

export const WINDOWS: IWindows = {
    top: document.querySelector("#top_block"),
    middle: document.querySelector("#middle_block"),
    bottom: document.querySelector("#bottom_block"),
};

export const INPUTS: IInputs = {
    messageInput: document.querySelector("#messageInput"),
};

export const MESSAGE: IMessage = {
    template: document.querySelector("#messageTemplate"),
};

export const URL: IURLs = {
    api: "https://edu.strada.one/api/user",
    userData: "https://edu.strada.one/api/user/me",
    messagesData: "https://edu.strada.one/api/messages/",
    socket: "wss://edu.strada.one/websockets?",
};
