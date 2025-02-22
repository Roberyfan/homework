const spisok = document.querySelector(".header2__krug-spisok");
const krug = document.querySelectorAll(".header2__krug")
spisok.addEventListener("mouseover", (e) => {
    const target = e.target;

    if (target.classList.contains("header2__krug-active")) return
    if (target.classList.contains("header2__krug")) {
        krug.forEach((b) => b.classList.remove("header2__krug-active"));

        target.classList.add("header2__krug-active");
    }
})

function togglebutton1() {
    document.getElementById("filters-active").classList.toggle("section1__filters-vibor--active");
}

function togglebutton2() {
    document.getElementById("sort-active").classList.toggle("section1__spisok-sort--show");
}

const filters = document.getElementById("filters-active");

filters.addEventListener ('click', (e) => {
    const wind = e.target.closest('filters');
if (!wind) {
    filters.classList.remove("section1__filters-vibor--active")
    console.log(wind);
}})