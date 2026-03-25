function toggleMenu() {
    document.getElementById("myTopnav").classList.toggle("active");
}

document.querySelectorAll("#myTopnav a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("myTopnav").classList.remove("active");
    });
});

const swiper = new Swiper('.logoSlider', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 40,
    speed: 3000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    freeMode: true,
    freeModeMomentum: false,
    loopedSlides: 14,
});

document.querySelectorAll(".accordion span").forEach(title => {
    title.addEventListener("click", () => {
        const box = title.parentElement;

        document.querySelectorAll(".accordion").forEach(item => {
            if (item !== box) {
                item.classList.remove("active");
            }
        });

        box.classList.toggle("active");
    });
});

emailjs.init("OCPer-TuJBUYK49Ei");

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_ediu28g",
        "template_zcvfefh",
        this
    )
    .then(function(response) {
        console.log("SUCCESS:", response);
        alert("Message sent successfully!");
    })
    .catch(function(error) {
        console.log("ERROR:", error);
        alert("Failed to send message");
    });
});


