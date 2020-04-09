var openButton = document.querySelector('.nav-button');
var closeButton = document.querySelector('.nav-close-button');
var nav = document.querySelector('.nav-ul');
var navFull = document.querySelector('.nav');
var scrollButton = document.querySelector('.scroll-top-button');

openButton.addEventListener('click' , function(){
  nav.classList.add('active');
})

closeButton.addEventListener('click' , function(){
  nav.classList.remove('active');
})


window.onscroll = function() { navChange(), buttonChange() };

function navChange(){
  if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
    navFull.classList.add('change');
  }else{
    navFull.classList.remove('change');
  }
}

function buttonChange(){
  if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
    scrollButton.classList.add('scroll-top-active');
  }else{
    scrollButton.classList.remove('scroll-top-active');

  }
}
