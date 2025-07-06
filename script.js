function locomotiveScroll(){
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

}



var loadingAnimation = function(){
    
    var t1 = gsap.timeline();

    t1.from("#loader .line h1 , .line h2" , {
        y:200,
        stagger:0.3,
        duration : 0.6 ,
        delay : 0.5 ,
    })

    //above one loads the text but timer and "now" remains visible so put gsap on it too

    t1.from(".line h5 , .line h6 ",{
        opacity:0 ,
        onStart : function(){
            var counter = document.querySelector("#timer h5") ;
            var count = 0 ;
            setInterval(function(){
                if(count<100){
                    count++ ;
                    counter.innerText = count ;
                }
                else{
                    counter.innerText = 100 ;
                }

            },25)
        }
    })

    t1.to(".line h2",{
        animationName:"nowAnimation",
        opacity:1,
    })

    t1.to("#loader" ,{
        opacity:0,
        duration: 0.5,
        delay: 3,
    })

    t1.from(".page1",{
        opacity:0 ,
        y:1600,
        delay:0.2,
        ease:Power4,
    })

    t1.to ("#loader",{
        display:"none",
    })

    t1.from("#nav1",{
        opacity:0 ,
        y:-100,
        duration:0.5,
        })

    //Page 1 ke main text ko load karna :
    t1.from("#hero1 h1 , #hero2 h1 ,#hero3 h2 , #hero3 h3 , #hero4 h1",{
        y:200,
        stagger:0.2,
    })
}

loadingAnimation();

var cursorAnimation = function(){
    document.addEventListener("mousemove",function(info){
    gsap.to("#cursor",{
        left:info.x,
        top:info.y,
        mixBlendMode:"difference",
        
        })
    })
}

cursorAnimation();

Shery.makeMagnet("#nav2 h3" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.920, 1)",
  duration: 1,
});


function videoPlay(){
    var video = document.querySelector("#video");
    var videoContainer = document.querySelector(".videoContainer");
    var videoCursor = document.querySelector(".videoCursor");
    videoContainer.addEventListener("mouseenter",function(){
        videoContainer.addEventListener("mousemove",function(details){
            gsap.to("#cursor",{
                opacity:0
            })
            gsap.to(".videoCursor" , {
                left: details.x - 500,
                top: details.y - 270,
            })
            console.log("mouse moved")
        })
        console.log("mouse entered")
    })

    console.log("First Listener")

    videoContainer.addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            opacity:1
        })
        gsap.to(".videoCursor" , {
            right : "20%" ,
            top : "-10%"
        })
    })
    console.log("Second Listener")
    var flag = 0
    console.log(videoContainer);
    videoContainer.addEventListener("click", function() {
        console.log("clicked")
        if (flag == 0) {
            console.log(video)
          video.play()
         .catch(err => console.warn("Couldn’t start video:", err));
          video.style.opacity = 1
        //   document.querySelector(".videoCursor").innerHTML = `<i class="ri-pause-mini-fill"></i>`
        //   gsap.to(".videoCursor", {
        //     scale: 0.5
        //   })
    console.log("Third Listener")
          flag = 1
        } else {
        console.log("Third Listener")
          video.pause()
          video.style.opacity = 0
        //   document.querySelector(".videoCursor").innerHTML = `<i class="ri-play-mini-fill"></i>`
        //   gsap.to(".videoCursor", {
        //     scale: 1
        //   })
          flag = 0
        }
    })
}

videoPlay();

//Locomotive Scroll 
const scroll = new locomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function sheryAnimation(){
    Shery.imageEffect(".imageDiv" , {
        style: 5,
        gooey : true ,
        config : {"a":{"value":1.37,"range":[0,30]},"b":{"value":-0.91,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272749932567818},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.37,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.49,"range":[0,2]},"discard_threshold":{"value":0.79,"range":[0,1]},"antialias_threshold":{"value":0.03,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":15.27,"range":[0,100]}} ,
    });
}

sheryAnimation();

document.addEventListener("mousemove" , function(details){
    gsap.to("#flag" , {
        x : details.x,
        y : details.y 
    })
})

document.querySelector("#hero3").addEventListener("mouseenter" , function(){
    gsap.to("#flag" , {
        opacity : 1
    })
})

document.querySelector("#hero3").addEventListener("mouseleave" , function(){
    gsap.to("#flag" , {
        opacity : 0
    })
})


document.querySelector("#create").addEventListener("mouseover" , function(){
    console.log("hovered")
    gsap.to("#create" , {
        // onHover : function(){
        //     $('#create #one').textillate({ in: { effect: 'fadeIn' } });
        // } ,
        // display : "none"
        onHover : function(){
            $('#one, #two').textillate({ in:{effect:'fadeIn'}, out:{effect:'fadeOut'} });
            $('#two').textillate('stop').hide();   // keep second one silent & hidden

            $('#create')
                .on('mouseenter', function (){
                      $('#one').textillate('out');
                      $('#two').show().textillate('in');
                })
                .on('mouseleave', function (){
                      $('#two').textillate('out');
                      $('#one').show().textillate('in');
                });
        },
        

    })  
    gsap.to("#create #two" , {
        display : "block"  ,
        color : transparent ,
        fontFamily : "silk serif"
    })
})