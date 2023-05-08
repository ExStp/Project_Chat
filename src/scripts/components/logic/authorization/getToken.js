import { URL } from "../../const";

async function getToken(email) {
    try {
        let response = await fetch(URL.api, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({ email }),
        });
        if (!response.ok) throw new Error("Ошибка на стороне сервера");
        return true;
    } catch (error) {
        alert(error.message);
        return false;
    }
}

export { getToken };
