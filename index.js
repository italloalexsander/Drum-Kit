var numberOfButtons = document.querySelectorAll(".drum").length;


/*Using object Literals instead of Switch Case*/
const drumSounds = {
  'w': function(){
    var audio = new Audio("sounds/crash.mp3")
    audio.play();
  },
  'a': function(){ 
    var audio = new Audio("sounds/kick-bass.mp3")
    audio.play();
  },
  's': function(){
    var audio = new Audio("sounds/snare.mp3")
    audio.play();
  },
  'd': function(){
    var audio = new Audio("sounds/tom-1.mp3")
    audio.play();
  },
  'j': function(){
    var audio = new Audio("sounds/tom-2.mp3")
    audio.play();
  },
  'k': function(){
    var audio = new Audio("sounds/tom-3.mp3")
    audio.play();
  },
  'l': function(){
    var audio = new Audio("sounds/tom-4.mp3")
    audio.play();
  } 
}

function drumAnimation(key){
  var activeButton = document.querySelector("." + key)
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  }, 100)
}


for ( i = 0 ; i < numberOfButtons ; i++ ) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    drumSounds[this.innerHTML]();
    drumAnimation(this.innerHTML);  
  })
}

document.addEventListener("keypress", function(event){
  drumSounds[event.key]();
  drumAnimation(event.key);
})

