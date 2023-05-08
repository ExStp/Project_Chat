import Cookies from "js-cookie";
import { URL } from "../../const";


// TODO: добавить проверки на ошибки
async function patchUsername(userName) {
    const token = Cookies.get("StradaToken");
    const response = await fetch(URL.api, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: userName }),
    });
    const result = await response.json();
    console.log(result);
}

export { patchUsername };
