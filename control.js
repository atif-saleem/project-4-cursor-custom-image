var main=document.querySelector("#main");
var cursor=document.querySelector("#cursor");
var imageDiv=document.querySelector("#image");

main.addEventListener("mousemove",function(e){
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        duration:0.8
    })
})
imageDiv.addEventListener("mouseenter",function(){
    cursor.innerHTML="View more";
    gsap.to(cursor,{
        scale:2,
    })
})
imageDiv.addEventListener("mouseleave",function(){
    cursor.innerHTML="";
    gsap.to(cursor,{
        scale:1,
    })
})
main.addEventListener("mouseleave",function(){
    style.cursor.visibility="hidden";
})
