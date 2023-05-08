import Cookies from "js-cookie";

function saveTokenCookie(token) {
    Cookies.set("StradaToken", token, { expires: 7 });
    console.log(token);
}

export { saveTokenCookie };
