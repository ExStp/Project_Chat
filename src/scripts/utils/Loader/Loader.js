// Определяет класс Loader.
// В конструктор класса передается контейнер, в который будет добавлен лоадер.
// Добавляет созданный элемент дива в контейнер.
// Определяет метод show() - отобразить индикатор
// Определяет метод hide() - скрыть индикатор

export default class Loader {
    constructor(container) {
        this.container = container;
        this.loaderElem = document.createElement("div");
        this.loaderElem.classList.add("loader");
        this.container.append(this.loaderElem);
    }

    show() {
        this.loaderElem.classList.add("active");
    }

    hide() {
        this.loaderElem.classList.remove("active");
    }
}
