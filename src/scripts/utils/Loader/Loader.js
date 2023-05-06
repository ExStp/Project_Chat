export default class Loader {
    constructor(container) {
        this.container = container;
        this.loaderElem = document.createElement("div");
        this.loaderElem.classList.add("loader");
        this.container.append(this.loaderElem);
    }

    show() {
        this.loaderElem.classList.add("inProgress");
    }

    hide() {
        this.loaderElem.classList.remove("inProgress");
    }
}
