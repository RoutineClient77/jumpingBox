var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    surface1 = createSprite(100,590,200,20);
    surface1.shapeColor = "blue";

    surface2 = createSprite(300,590,200,20);
    surface2.shapeColor = "yellow";

    surface3 = createSprite(500,590,200,20);
    surface3.shapeColor = "red";

    surface4 = createSprite(700,590,200,20);
    surface4.shapeColor = "green";


    box = createSprite (Math.round(random(20,750)),400,20,20);
    box.shapeColor = "white";
    box.velocityY = 3;

}

function draw() {
    background("black");
    
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.velocityY = 0;
        box.shapeColor = "blue";
       
        
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.velocityY = 0;
        box.shapeColor = "yellow";
        

    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.velocityY = 0;
        box.shapeColor = "red";
      

    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.velocityY = 0;
        box.shapeColor = "green";
        

    }
    
    
    
    

    drawSprites();
}

function isTouching(object1, object2,){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
    return true;
  }
  else {
    return false;
  }
  }
  
  
  function bounceOff (object1, object2,){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
        object1.velocityX = object1.velocityX * (-1);
        object2.velocityX = object2.velocityX * (-1);
  }
  else if(object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  }
  }