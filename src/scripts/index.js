const dialog = document.querySelector("#dialogSettings");
const btn_settings = document.querySelector(".btn_settings");
const dialogClose = document.querySelector(".dialogClose");

btn_settings.addEventListener("click", () => {
    dialog.showModal();
});

dialogClose.addEventListener('click', () => {
    dialog.close();
})