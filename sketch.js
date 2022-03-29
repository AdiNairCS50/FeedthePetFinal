var pet, pet_eating, happy_dog;
var foodImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
  foodImg = loadImage("./img/food.png");
  pet_eating = loadAnimation("./img/pet1.png", "./img/pet2.png");
  happy_dog = loadImage("./img/dog.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight-100);

  pet_eating.playing = true;
  pet_eating.looping = true;

  food = createSprite(300,650,220,200)
  food.addImage(foodImg);
  food.scale = 0.05;

  pet = createSprite(1000,500,30,30)
  pet.addAnimation("eating", pet_eating);
  pet.addAnimation("happy", happy_dog);
  pet.scale = 0.15;
}

function draw(){
  background(255, 204, 0);

  if(keyIsDown(UP_ARROW)){
    food.y -= 2;
  }

  if(keyIsDown(DOWN_ARROW)){
    food.y += 2;
  }

  if(keyIsDown(RIGHT_ARROW)){
    food.x += 2;
  }

  if(keyIsDown(LEFT_ARROW)){
    food.x -= 2;
  }

  if(pet.isTouching(food)){
    foodImg = loadImage("dog.png");
    gameState=END;
  }
  else if(gameState===END){
  pet.changeAnimation("happy", happy_dog);
  }


  drawSprites();
}