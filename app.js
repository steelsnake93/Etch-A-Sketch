const grid = document.querySelector(".grid-container");
grid.style.gridTemplateColumns - "repeated(16, 1fr)";
grid.style.gridTemplateRows - "repeated(16, 1fr)";

createGrid = () => {
    for (let i = 0; i < 256; i++) {
        const div =document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
};

