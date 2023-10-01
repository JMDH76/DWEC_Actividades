let table = document.getElementById("tablebot");
table.style.display = "none";

let title = document.getElementsByTagName("h1")[0];
title.addEventListener("dblclick", () => {
    if (table.style.display === "none") {
        table.style.display = 'block';

    } else {
        table.style.display = 'none';
    }
})
