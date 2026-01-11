
// Sidebar menu

const menuTriggerEl = document.querySelector(".menu-trigger");
const sideBarEl = document.querySelector("nav");
const closeEl = document.querySelector("nav span");

menuTriggerEl.addEventListener("click", () => {
    sideBarEl.classList.remove("open");
});

closeEl.addEventListener("click", () => {
    sideBarEl.classList.add("open");
});

// Chests rarity and opening system

const chest = document.querySelector(".chest");
const result = document.querySelector(".result")

chest.addEventListener("click", () => {
    let randomChance = Math.floor((Math.random() * 100) + 1);
    result.textContent = randomChance;

    if (randomChance > 0 && randomChance <= 50)
    {
        document.writeln("1 in 2");
    }
    else if (randomChance > 50 && randomChance <= 75)
    {
        document.writeln("1 in 4");
    } 
    else if (randomChance > 75 && randomChance <= 90)
    {
        document.writeln("1 in 7");
    }
    else if (randomChance > 90 && randomChance <= 99)
    {
        document.writeln("1 in 11");
    }
    else 
    {
        document.writeln("1 in 100");
    };
});