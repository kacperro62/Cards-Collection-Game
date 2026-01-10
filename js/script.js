const menuTriggerEl = document.querySelector(".menu-trigger");
const sideBarEl = document.querySelector("nav");
const closeEl = document.querySelector("nav span");

menuTriggerEl.addEventListener("click", () => {
    sideBarEl.classList.add("open");
});

closeEl.addEventListener("click", () => {
    sideBarEl.classList.remove("open");
});