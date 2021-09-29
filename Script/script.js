AOS.init();

$(document).ready(function(){
    $("#bars").click(function(){
    
      if( $("#bars i").hasClass("ri-bar-chart-horizontal-line")){
      $(".navlinks").fadeIn();
      $("#bars i").removeClass("ri-bar-chart-horizontal-line");
      $("#bars i").addClass("ri-close-line");
     
      }else{
        $(".navlinks").fadeOut();
      $("#bars i").addClass("ri-bar-chart-horizontal-line");
      $("#bars i").removeClass("ri-close-line");
      return true;
      }
    });
  });

  // When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.querySelector(".nav").style.backgroundColor = "black";
  } else {
    document.querySelector(".nav").style.backgroundColor = "transparent";
    
  }
}



$('.main-text h1').textillate({
    in: {
        effect: 'fadeInUp'
    },
    loop: true,
    autoStart: true,
    out: {
        effect: 'fadeOutRight'
    }
})

$('.smalltolarge h2').textillate({
  in: {
      effect: 'bounce'
  },
  loop: true,
  autoStart: true,
  out: {
      effect: 'bounce'
  }
})


gsap.to('#smalltolarge',{
  scrollTrigger:{
      trigger: "#btn",
      start : "top top",
      scrub: 2,
      pin: "#fullimg"
  },
  width:"80%",
})

gsap.to('#ab-img',{
  scrollTrigger:{
      trigger: "#downscroll",
      start : "top top",
      scrub: 2,
      pin: "#about"
  },
  width:"100%",
 
})
gsap.to('#tailor-img',{
  scrollTrigger:{
      trigger: "#tailor",
      start : "top top",
      scrub: 2,
      pin: "#tailor"
  },
  width:"70%",
})

gsap.to('#tailor-img1',{
  scrollTrigger:{
      trigger: "#tailor",
      start : "top top",
      scrub: 2,
      pin: "#tailor"
  },
  width:"90%",
})



var mq = window.matchMedia( "(max-width: 992px)" );
if (mq.matches) {

    gsap.to('#smalltolarge',{
        scrollTrigger:{
            trigger: "#btn",
            start : "top top",
            scrub: 2,
            pin: "#fullimg"
        },
        width:"100%",
    })
 }

