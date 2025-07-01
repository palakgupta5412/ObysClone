
var t1 = gsap.timeline();

t1.from("#loader .line h1" , {
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