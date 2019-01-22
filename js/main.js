window.addEventListener("scroll", function(){
    offset = window.pageYOffset;

    document.getElementById("parallax").style.backgroundPositionY = offset * -0.1 + "px";
})

document.getElementById("btn").onclick=function changText() 
{
    document.getElementById("gif").style.display = "block";
    document.getElementById("btn").style.display = "none";
    document.getElementById("gif").style.margin = "auto";
    document.getElementById("gif").style.marginTop = "5vh";
    var audio = document.getElementById("audio");
    audio.play();
}