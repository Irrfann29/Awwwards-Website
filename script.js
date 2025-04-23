
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

gsap.to(".logo svg",{
    transform:"translateY(-125%)",
    scrollTrigger:{
        trigger : ".page1",
        scroller: "#main",
        start : "top 0",
        end: "top -25%",
        scrub : true

    }

})
gsap.to(".lists ul",{
    transform:"translateY(-125%)",
    opacity : "0",
    scrollTrigger:{
        trigger : ".page1",
        scroller: "#main",
        start : "top 0",
        end: "top -25%",
        scrub : true,
        

    }

})
gsap.to(".logo .logo2",{
    opacity:1,
})

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

var buyItems= document.querySelector("#page4")

buyItems.addEventListener("mouseenter",function(){
    gsap.to("#movecurs",{
        opacity : 1,
        scale : 1,
    })
})
buyItems.addEventListener("mouseleave",function(){
    gsap.to("#movecurs",{
        opacity : 0,
        scale : 0,
    })
})
buyItems.addEventListener("mousemove",function(dets1){
    const rect1 = buyItems.getBoundingClientRect();
    const x1 = dets1.clientX - rect1.left;
    const y1 = dets1.clientY - rect1.top;
    gsap.to("#movecurs",{
        duration : 0.5,
        delay :0.1,
        left: x1 - 115,
        top: y1 - 115,
        ease: "power3.out",
    })
})