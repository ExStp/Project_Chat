# Class Storage

Класс Storage предназначен для удобной работы с объектом localStorage или sessionStorage. Он предоставляет методы для установки, получения, удаления, проверки наличия и очистки данных, хранящихся в localStorage или sessionStorage.

# Конструктор
- constructor(storage: Object = localStorage)
Конструктор класса принимает один необязательный аргумент - объект хранилища, который по умолчанию устанавливается на localStorage. Если переданный объект не является localStorage или sessionStorage, выбрасывается исключение Error.

# Методы
- set(key: string, value: any): [string, any]
Метод set принимает два аргумента: ключ и значение. Он устанавливает в localStorage или sessionStorage значение, закодированное в формат JSON, по указанному ключу и возвращает массив [key, value].

- get(key: string): any
Метод get принимает один аргумент - ключ. Он возвращает декодированное из формата JSON значение, соответствующее указанному ключу, если оно есть в localStorage или sessionStorage, иначе - null.

- remove(key: string): void
Метод remove принимает один аргумент - ключ. Он удаляет из localStorage или sessionStorage значение по указанному ключу.

- has(key: string): boolean
Метод has принимает один аргумент - ключ. Он проверяет наличие значения по указанному ключу в localStorage или sessionStorage и возвращает true, если значение есть, и false в противном случае.

- getKeys(): string[]
Метод getKeys возвращает массив всех ключей, находящихся в localStorage или sessionStorage.

- getEntries(): [string, any][]
Метод getEntries возвращает массив всех записей, находящихся в localStorage или sessionStorage. Каждая запись представляет собой массив [key, value], в котором value декодировано из формата JSON.

- getValues(): any[]
Метод getValues возвращает массив всех декодированных из формата JSON значений, находящихся в localStorage или sessionStorage.

- getAllData(): [string[], any[], [string, any][]]
Метод getAllData возвращает массив, содержащий массив всех ключей, массив всех декодированных из формата JSON значений и массив всех записей. Этот метод полезен, когда нужно получить все данные из localStorage или sessionStorage.

- isEmpty(): boolean
Метод isEmpty проверяет, является ли localStorage или sessionStorage пустым, и возвращает true, если они пусты, и false в противном случае

- clearAll()
удаляет все значения из LocalStorage.

- length()
возвращает количество элементов в LocalStorage.


*Данный текст был написан с помощью ChatGPT ^^*