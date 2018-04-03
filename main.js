/* CHANGE RATE OF VIDEO */

var vid = document.getElementById("video-loop");
var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);

if(sPage == "index.html"){
  vid.playbackRate = 0.5;

  vid.addEventListener("mouseover",function(){
    console.log(vid.playbackRate);
    vid.playbackRate = 2;
  });

  vid.addEventListener("mouseout",function(){
    console.log(vid.playbackRate);
    vid.playbackRate = 0.5;
  });
}

/* CHECK IF DEVICE IF MOBILE */

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  alert("mobile");
  document.html.style.backgroundColor = "rbg(255,246,255)";
}else{
  alert("desktop");
}
