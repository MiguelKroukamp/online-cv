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

// if($("parallax").css("display") == "none"){
//     $.parallax({...});
// }

// if(screen.width < 650) { 
//     // do any 480 width stuff here, or simply do nothing
//     ($("parallax").css("display") == "none")
//     return;
// } else {
//     // do all your cool stuff here for larger screens
// }

var isActive = false;

$('.js-menu').on('click', function() {
	if (isActive) {
		$(this).removeClass('active');
		$('body').removeClass('menu-open');
	} else {
		$(this).addClass('active');
		$('body').addClass('menu-open');
	}

	isActive = !isActive;
});