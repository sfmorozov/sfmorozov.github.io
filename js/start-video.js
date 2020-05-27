var video = document.querySelector(".video"),
    button = document.querySelector(".video-wrp");

button.addEventListener("click", function() {
  video.play()
  video.setAttribute("controls","controls");
}, false);

$(".video-wrp").click(function() {
  $(".button-wrp").addClass('button-wrp--hide');
  $(".video-text-wrp").addClass('video-text-wrp--hide');
})