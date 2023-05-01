module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: "eslint:recommended",
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        "max-len": [
            "error",
            {
                code: 80, // максимальная длина строки кода
                tabWidth: 2, // ширина табуляции
                ignoreUrls: true, // игнорировать длину URL
                ignoreComments: false, // не игнорировать длину комментариев
                ignoreTrailingComments: true, // игнорировать длину комментариев в конце строки
                ignoreStrings: true, // игнорировать длину строковых литералов
                ignoreTemplateLiterals: true, // игнорировать длину шаблонных строк
                ignoreRegExpLiterals: true, // игнорировать длину регулярных выражений
            },
        ],
        "no-unused-vars": "warn", //выдает предупреждение, если объявленная переменная не используется в коде.
        "no-eval": "warn", //выдает предупреждение, если используется функция eval()
        "no-empty": "warn", //выдает предупреждение, если в блоке кода используется пустой блок без комментария.
        "prefer-arrow-callback": "warn", //выдает предупреждение, если можно заменить функцию на стрелочную функцию.
        "semi": ["warn", "always"], //выдает предупреждение, если точка с запятой не используется после каждого выражения
        "no-var": "warn", //выдает предупреждение, если используется ключевое слово var
        "object-curly-spacing": ["warn", "never"] //выдает предупреждение, если фигурные скобки не располагаются сразу после имени объекта и без пробела.
    },
};
