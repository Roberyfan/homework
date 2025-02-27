const spisok = document.querySelector(".header2__krug-spisok");
const krug = document.querySelectorAll(".header2__krug")
spisok.addEventListener("mouseover", (e) => {
    const target = e.target;

    if (target.classList.contains("header2__krug-active")) return
    if (target.classList.contains("header2__krug")) {
        krug.forEach((b) => b.classList.remove("header2__krug-active"));

        target.classList.add("header2__krug-active");
    }
});

//Фильтры

    const btnFilter = document.getElementById('btn-filter');
    const filtersActive = document.getElementById('filters-active');
    const btnSort = document.getElementById('btn-sort');
    const sortActive = document.getElementById('sort-active');

    function toggleFilters() {
        filtersActive.classList.toggle('section1__filters-vibor--active');
    }

    function toggleSort() {
        sortActive.classList.toggle('section1__spisok-sort--show')
    }

    function closefilters(event) {
        if (!filtersActive.contains(event.target) && !btnFilter.contains(event.target)) {
            filtersActive.classList.remove("section1__filters-vibor--active")
        }
    }

    function closeSort(e) {
        if (!sortActive.contains(e.target) && !btnSort.contains(e.target)) {
            sortActive.classList.remove("section1__spisok-sort--show")
        }
    }

    btnFilter.addEventListener("click", toggleFilters);
    document.addEventListener("click", closefilters);
    btnSort.addEventListener("click", toggleSort);
    document.addEventListener("click", closeSort);

    new Swiper('.kros__slider', {

        spaceBetween: 40,
        slidesPerView: 4,


    });