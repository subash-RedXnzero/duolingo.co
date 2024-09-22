// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });




// function
  function init(){ gsap.registerPlugin(ScrollTrigger);


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
  }
  init()





  var crsr=document.querySelector(".cursor")
   var main =document.querySelector("#main")

  main.addEventListener("mousemove",function(dets){
   
      // ghost.style.left =(dets.clientX +1) + "px";
      // ghost.style.top =(dets.clientY + 1) + "px";

    crsr.style.left = dets.x+10+"px"
    crsr.style.top = dets.y+10+"px"
  })

var tl= gsap.timeline({
  scrollTrigger:{
    trigger:"#par",
    scroller:"#main",
    markers:false,
    start:"top 20%",
    end:"top 0",
    scrub:4,
    
  }
})

tl.to("#par",{
  x:350,
  duration:5,
  
 
},"ko")
tl.to("#par1",{
  x : -218,
  duration:5,
},"ko")

  tl.to("#box video",{
    width:"90vw",
    height:"100vh",
    duration:4,
  },"ko")


 tl.to(".cre",{
x:100,
duration:4,

 },"lo")

 tl.to(".bu",{
  x:-100,
  duration:4,
 },"lo")

 tl.to(".page2 h1",{
  x:325,
  duration:4,
 },"lo")



var box =  document.querySelectorAll(".bx")
box.forEach(function(num){
num.addEventListener("mouseenter",function(){  
  var att =num.getAttribute("data-image")
  crsr.style.width ="500px"
  crsr.style.height ="400px"
  crsr.style.borderRadius ="0"
  crsr.style.backgroundImage =`url(${att})`
})
num.addEventListener("mouseleave",function(){
  num.style.backgroundColor ="transparent"
  
  crsr.style.width ="20px"
  crsr.style.height ="20px"
  crsr.style.borderRadius ="50%"
  crsr.style.backgroundImage =`none`
})
})







