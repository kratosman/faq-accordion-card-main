// var btn = document.querySelectorAll(".accordion-toggle");
// var answer = document.querySelector(".answer");

document.querySelectorAll(".accordion-toggle").forEach((btn) => {
    btn.addEventListener('click', () => {
        
        btn.classList.toggle("active-show");
        btn.nextElementSibling.classList.toggle("active-show");
        btn.classList.toggle("font-weight");
        btn.classList.toggle("rotate-toggle");
           
    })
});