var cat
var mouse
var catImage1
var catImage2
var mouseImage1
var mouseImage2
var backgroundImage
function preload() {
    //load the images here
    catImage1=loadAnimation("cat1.png", "cat2.png");
    catImage2=loadAnimation("cat3.png ", "cat4.png");
    mouseImage1=loadAnimation("mouse1.png", "mouse2.png");
    mouseImage2=loadAnimation("mouse3.png", "mouse4.png");
    backgroundImage=loadImage("garden.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(900, 300);
    mouse = createSprite(100, 300);
    mouse.addAnimation(mouseImage1);
    cat.addAnimation(catImage1);

}

function draw() {

    background(backgroundImage);
    //Write condition here to evalute if tom and jerry collide
    if(cat.isTouching(mouse)){
        cat.addAnimation(catImage2);
        mouse.addAnimation(mouseImage1);
    }
    drawSprites();
}


function keyPressed(){
if(keydown("SPACE")){
    mouse.velocityX = 3;
    cat.velocityX= 3;
}   cat.addAnimation(catImage2);
    mouse.addAnimation(mouseImage2);
  //For moving and changing animation write code here


}
