// --> Класс Storage <--

// Данный код представляет класс Storage, который предоставляет набор 
// методов для работы с объектом LocalStorage или SessionStorage. 
// Конструктор класса принимает необязательный параметр storage, 
// который по умолчанию установлен на localStorage. 

// Более подробное описание по приколу я решил написать в README.MD

class Storage {
    constructor(storage = localStorage) {
        if (storage !== localStorage && storage !== sessionStorage) {
            throw new Error("Invalid storage object passed!");
        }
        this.storage = storage;
    }

    set(key, value) {
        this.storage.setItem(key, JSON.stringify(value));
        return [key, value];
    }

    get(key) {
        return JSON.parse(this.storage.getItem(key));
    }

    remove(key) {
        this.storage.removeItem(key);
    }

    has(key) {
        if (this.get(key) === null) return false;
        else return true;
    }

    getKeys() {
        return Object.keys(this.storage);
    }

    getEntries() {
        const entries = Object.entries(this.storage);
        return entries.map(([key, value]) => [key, JSON.parse(value)]);
    }

    getValues() {
        let values = [],
            keys = this.getKeys(),
            i = keys.length;
        while (i--) {
            values.push(JSON.parse(this.storage.getItem(keys[i])));
        }
        return values;
    }

    getAllData() {
        return [this.getKeys(), this.getValues(), this.getEntries()];
    }

    isEmpty() {
        if (this.length()) return false;
        else return true;
    }

    clearAll() {
        this.storage.clear();
    }

    length() {
        return this.storage.length;
    }
}

export default Storage;
