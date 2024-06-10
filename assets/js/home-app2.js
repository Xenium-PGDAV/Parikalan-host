// const ham_menu = document.querySelector('.ham-menu_h');
const container = document.querySelector(".container_h");

// const announce = document.querySelector('.announcement_h');

let nav = document.querySelector(".links_h");
// nav.style.display="none";

container.addEventListener("click", () =>{
    container.classList.toggle("active");
    // nav.style.display="flex";
})

// announce.addEventListener("click", () =>{
//     container.classList.toggle("active1");
// })