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
    t1.from("#hero1 h1 , #hero2 h1 ,#hero3 h2 , #hero4 h1",{
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


// var videoCursor = document.querySelector(".videoCursor");

// var videoContainer = document.querySelector(".videoContainer");
// var video = document.querySelector("#video");
// var bgImg = document.querySelector(".videoContainer img");
// videoContainer.addEventListener("mousemove",(details)=>{
//     console.log(details);
//     gsap.to(videoCursor , {
//         left: details.x - 570,
//         top: details.y - 300,
//     })
// })

// videoContainer.addEventListener("click",()=>{
//         if(video.paused){
//             video.play();
//             bgImg.Img.style.display = "none";
//         }
//         else{
//             video.pause();
//         }
// })

 var footerHeading = document.querySelector(".footer h1");
footerHeading.addEventListener("mouseover",()=>{
  gsap.to(footerHeading , {
    fontStyle : "italic",
    fontFamily : "silk serif",
    animationName:"footerAnimation",
    stagger: 0.2,
})  
})