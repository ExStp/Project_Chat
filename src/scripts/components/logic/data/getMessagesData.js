import Cookies from "js-cookie";
import { URL } from "../../const";

async function getMessagesData() {
    const token = Cookies.get("StradaToken");
    const response = await fetch(URL.messagesData, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            Authorization: `Bearer ${token}`,
        }
    });
    return await response.json();
}

export { getMessagesData };
