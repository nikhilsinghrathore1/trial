console.log("working");
let tl = gsap.timeline();
tl.from(".right h1",{
               delay:2,
               opacity:0,
               stagger:0.5,
               yoyo:true,
               y:-100,
               duration:1
})

tl.from(".left h3",{
               opacity:0,
               y:-100,
               stagger:0.5,
               duration:0.7
})

tl.from(".left button",{
               opacity:0,
               y:100,
               stagger:0.4             
})


tl.from(".left svg",{
               opacity:0,
               scale:0,
})
tl.to(".right img",{
               duration:1.5,
               rotate:"1deg",
               yoyo:true,
               repeat:-1
})