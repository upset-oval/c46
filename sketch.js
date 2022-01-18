var player
var enemy
var background
var pineapple

function preload() {
  player = loadImage("hee.png")
  enemy = loadImage("heehee.png")
  backgroundImage = loadImage("funky background.jpg")
  pineapple = loadImage("apple.png")
  platformImg = loadImage("rocket.png")
}


function setup() {
  createCanvas(1280, 720);
  bg = createSprite(width / 2, height / 2)
  bg.addImage(backgroundImage)
  platformGroup=new Group()
  invisiblePlatformGroup=new Group()
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var j = 0; j < 6; j++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  for (var i = 100; i < 1280; i = i + 200) {
    platform = createSprite(i, 700, Math.round(random(50, 100)), Math.round(random(100, 500)))
    platform.shapeColor = color
    platformGroup.add(platform)
    invisiblePlatform=createSprite(platform.x,platform.y-platform.height/2,platform.width,10)
   invisiblePlatformGroup.add(invisiblePlatform)
  }
  fruit = createSprite(platform.x, platform.y - (platform.height / 2 + 50))
  fruit.addImage(pineapple)
  fruit.scale = 0.5

  character = createSprite(100,platformGroup[0].position.y/2-50)
  character.addImage(player)
  character.scale = 0.5
  character.velocityY=10
character.debug=true
character.setCollider
}

function draw() {
  background(0)
 character.collide(invisiblePlatformGroup)
  drawSprites()
}













