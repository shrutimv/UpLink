gsap.registerPlugin(ScrollTrigger);

const toggleButton = document.getElementsByClassName("menu")[0];
const links = document.getElementsByClassName("nav-column")[0];

toggleButton.addEventListener("click", function () {
    links.classList.toggle("active");
})

var loader = document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display="none";
})

gsap.from(".one-2", {
    y: 100,
    duration: 3,
    autoAlpha: 0,
    scrollTrigger: {
        trigger: ".one-2",
        start: "top 95%",
    }
}
)

gsap.from(".one-3", {
    y: 100,
    duration: 3,
    opacity: 0,
    scrollTrigger: {
        trigger: ".one-3",
        start: "top 95%",
    }
}
)

gsap.from(".one-a", {
    x: -200,
    duration: 2,
    opacity: 0,
    markers: true,
    scrollTrigger: {
        trigger: ".one-3",
        start: "bottom 100%",
    }
})

gsap.from(".one-b", {
    x: 200,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".one-3",
        start: "bottom 100%",
    }
})

gsap.from(".anim-1", {
    scale:0,
    duration: 2,
    scrollTrigger: {
        trigger: ".anim-1",
        start: "center 100%",
    }
})

gsap.from(".anim-2", {
    scale:0,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".anim-2",
        start: "center 100%",
    }
})

gsap.from(".anim-3", {
    scale:0,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".anim-3",
        start: "center 100%",
    }
})

gsap.from(".anim-4", {
    scale:0,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".anim-4",
        start: "center 100%",
    }
})

gsap.from(".four-1", {
    scale:0,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".four-1",
        start: "center 100%",
    }
})

gsap.from(".four-2", {
    scale:0,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".four-2",
        start: "center 100%",
    }
})

gsap.from(".five-num1", {
    scale:0,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".five-num1",
        start: "center 100%",
    }
})


gsap.from(".five-num2", {
    scale:0,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".five-num2",
        start: "center 100%",
    }
})


gsap.from(".five-num3", {
    scale:0,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".five-num3",
        start: "center 100%",
    }
})