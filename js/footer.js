const footer = document.querySelector("#main-footer");
const date = new Date().getFullYear();
const copyRight = `&copy ${date}`;
footer.innerHTML = copyRight;