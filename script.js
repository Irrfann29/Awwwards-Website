

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var videoContainer = document.querySelector(".videoCont");
var playbtn = document.querySelector(".play");

videoContainer.addEventListener("mouseenter", function() {
    gsap.to(playbtn,{
        opacity:1,
        scale :1,
    })
})
videoContainer.addEventListener("mouseleave", function() {
    gsap.to(playbtn,{
        opacity:0,
        scale :0,
    })
})
videoContainer.addEventListener("mousemove", function(dets) {
    const rect = videoContainer.getBoundingClientRect();
    const x = dets.clientX - rect.left;
    const y = dets.clientY - rect.top;
    gsap.to(playbtn,{
        duration : 0.5,
        delay :0.1,
        left: x - 30,
        top: y - 30,
    })
})
window.addEventListener("onscroll", function () {
    gsap.to(playbtn, {
        opacity: 0,
        scale: 0,
        duration: 0.3,
    });
});
gsap.from(".page1 h1",{
    y: 100,
    delay:0.4,
    duration : 0.7,
    stagger : 0.2,
    opacity : 0,
    ease: "power3.out",
})
gsap.from(".videoCont",{
    y: 100,
    delay : 1,
    duration : 0.3,
    stagger : 0.2,
    opacity : 0,
})