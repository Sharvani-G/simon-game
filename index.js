
var base=["green","yellow","blue","red"];

var gamepattern=[];

var userClickedPattern=[];
var level= 0;
var start=true;
$(document).keydown(function(){
    $("h1").text("level "+level);
  if(start){
  nextSequence();
start=false;}

});

function nextSequence(){
  userClickedPattern = [];

  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColour=base[randomNumber];
  gamepattern.push(randomChosenColour);

sound(randomChosenColour);
level++;
  $("h1").text("level "+level);

}
$(".btn").click(function(){
  var userChosenColour=$(this).attr("id");
  userClickedPattern.push(userChosenColour);

  sound(userChosenColour);
check(userChosenColour);
});

function sound(name) {
  $("#"+name).addClass("flash");
  setTimeout(function(){
    $("#"+name).removeClass("flash");
  },200);
    var audio =new Audio("./sounds/"+name+".mp3");
    audio.play();

}
var i=0;
function check(color){

    if (gamepattern[i]==color){
      i++;
      if(i==gamepattern.length){
        i=0;
      setTimeout(function(){nextSequence();},1000);
      }
    }else{  var audio =new Audio("./sounds/wrong.mp3");
      audio.play();
      $("h1").text("Opps! u lost.press any key to reset:)");
      $("body").addClass("game-over");
      setTimeout(function(){$("body").removeClass("game-over");},100);
      gamepattern = [];
    userClickedPattern = [];
    i=0;
    level=0;
    start=true;
    }
  }
