var character = document.getElementById("character");
var block = document.getElementById("block");
function Jump() {
  if(character.classList != "animate"){
    character.classList.add("animate");
  }
  setTimeout (function() {
    character.classList.remove("animate");
  },500);
}

var checkDead = setInterval(function () {
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if(blockLeft<20 && blockLeft>0 && characterTop>=130){
    block.style.animation = "none";
    block.style.display = "none";
    alert("oh wait u can't");
  }
},10);

/* Title:The Easiest Javascript Game Ever
     Name:KnifeCircus
     Year:2020
     Link:https://www.youtube.com/watch?v=bG2BmmYr9NQ
 */
