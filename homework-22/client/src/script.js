const box = document.querySelector(".box");
document.addEventListener("mousemove", (e) => {
    let x = e.clientX - 200;
    let y = e.clientY - 200;
    box.style.left = x + "px";
    box.style.top = y + "px";
})