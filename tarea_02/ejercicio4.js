let menu = document.getElementsByTagName("ul")[0];
menu.style.display = "none";

let image = document.getElementsByTagName("img")[0];
image.addEventListener("click", () => {
    if (menu.style.display === "none") {
        menu.style.display = 'block';
    }
})
