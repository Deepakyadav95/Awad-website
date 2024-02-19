  var t1 = gsap.timeline({
    opacity:0
  }) 
  t1.from("#nav h1, #nav h4,#nav i,#nav h5", {
    delay:0.4,
    y:-50,
    // duration:1,

    opacity:0,
    stagger:0.1

  })
  t1.from("#center>h1",{
    opacity:0,
    y:40,
    scale:1.2,
    duration:0.9
  })
  t1.from("#center>p",{
    opacity:0,
    y:20,
    // scale:1.2,
    duration:0.6
  })
  t1.from("#page1 img",{
duration:0.5,
opacity:0,
scale:0.7
  })
  var t12 = gsap.timeline({
    scrollTrigger:{
      trigger:"#page2 h2",
      scroller:"body",
      start:"top 80%",
      // markers:true
    }
  })
  t12.from("#page2 h2",{
    y:30,
    opacity:0,
    // scrollTrigger:{
    //   trigger:"#page2 h2",
    //   scroller:"body",
    //   start:"top 80%",
    //   markers:true
    // }
  })
  t12.from("#page2 p",{
    y:30,
    opacity:0,
  })
  gsap.from(".elem",{
    y:100,
    scale:0.7,
     opacity:0,
     duration:0.7,
    //  stagger:0.2,
     scrollTrigger:{
      trigger:".elem ",
      scroller:"body",
      start:"top 80%",
      // markers:true
    }
     
  })