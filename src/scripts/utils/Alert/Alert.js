export default class Alert {
    constructor(text) {
        this.alert = document.createElement("div");
        this.alert.classList.add("alert", "hide");
        this.alert.textContent = text;
        document.body.append(this.alert);
    }

    show() {
        this.alert.classList.remove("hide");
        this.alert.classList.add("show");
    }

    hide() {
        this.alert.classList.remove("show");
        this.alert.classList.add("hide");
    }
}
