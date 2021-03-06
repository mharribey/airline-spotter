/* CHANGE RATE OF VIDEO */

var vid = document.getElementById("video-loop");
var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);

if(sPage == "index.html" || sPage == ""){
  var index = document.querySelector(".container-index");

  vid.playbackRate = 0.5;

  vid.addEventListener("mouseover",function(){
    vid.playbackRate = 2;
  });

  vid.addEventListener("mouseout",function(){
    vid.playbackRate = 0.5;
  });

}else{
  var about = document.querySelector(".container-about");
}

/* SLIDE */

var btn = document.getElementsByClassName('bottom-btn');

document.addEventListener("DOMContentLoaded",()=>{
  setTimeout(function(){
    if(sPage == "index.html" || sPage == ""){
      index.classList.remove("left-start");
      index.classList.add("is-ready");
    } else if(sPage == "about.html") {
      about.classList.remove("right-start");
      about.classList.add("is-ready");
    }
  },100);
});

Array.from(btn).forEach(btn=>{
  btn.addEventListener("click",()=>{
    if(sPage == "index.html" || sPage == ""){
      index.classList.add("blur");
      index.classList.add("right-remove");
      setTimeout(function(){
        index.classList.remove('is-ready');
        index.classList.remove('is-ready');
      },1700);
    } else if(sPage == "about.html") {
      about.classList.add("blur");
      about.classList.add('left-remove');
      setTimeout(function(){
        about.classList.remove('is-ready');
        about.classList.remove('is-ready');
      },1700);
    }
    setTimeout(function(){
      window.location.href = btn.id+'.html';
    },500);
  });
});
