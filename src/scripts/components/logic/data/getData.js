import Cookies from "js-cookie";
import { URL } from "../../const";

// TODO: переделать функцию получения данных, добавить проверки на ошибки
async function getData() {
    const token = Cookies.get("StradaToken");
    const response = await fetch(URL.userData, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            Authorization: `Bearer ${token}`,
        }
    });
    return await response.json();
}

export { getData };
