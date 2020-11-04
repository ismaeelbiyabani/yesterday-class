const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform,bgImg;
var hexagon, slingShot;
var score = 0

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    log1 = new Log1(600,320,300,10);
    log3 =  new Log1(1000,300,300,10);

    // L4 box1
    box1 = new Box2(500,300,40,40);
    box2 = new Box(550,300,40,40);
    box3 = new Box2(600,300,40,40);
    box4 = new Box(650,300,40,40);
    box5 = new Box2(700,300,40,40);


    // L3 Box1

    box6 = new Box2(520,270,40,40);
    box7 = new Box(570,270,40,40);
    box8 = new Box2(620,270,40,40);
    box9 = new Box(670,270,40,40);

    //L2 Box1

    box10 = new Box2(540,240,40,40);
    box11 = new Box(590,240,40,40);
    box12 = new Box2(640,240,40,40);
    
    //L1 Box1

    box13 = new Box2(560,210,40,40);
    box14 = new Box(610,210,40,40);

    //L0 Box1

    box15 = new Box2(582,180,40,40);    
    
    
    
    
    
    
    
    // L4 box1
    box16 = new Box2(500+400,280,40,40);
    box17 = new Box(550+400,280,40,40);
    box18 = new Box2(600+400,280,40,40);
    box19 = new Box(650+400,280,40,40);
    box20 = new Box2(700+400,280,40,40);


    // L3 Box1

    box21 = new Box(520+400,250,40,40);
    box22 = new Box2(570+400,250,40,40);
    box23 = new Box(620+400,250,40,40);
    box24 = new Box2(670+400,250,40,40);

    //L2 Box1

    box25 = new Box2(540+400,220,40,40);
    box26 = new Box(590+400,220,40,40);
    box27 = new Box2(640+400,220,40,40);
    
    //L1 Box1

    box28 = new Box(560+400,190,40,40);
    box29 = new Box2(610+400,190,40,40);

    //L0 Box1

    box30 = new Box2(582+400,160,40,40);
    


    hexagon = new Hex(200,250,40,40);

    slingshot = new SlingShot(hexagon.body,{x:200, y:250});
}

function draw(){
    if(bgImg)
    background(bgImg);
    Engine.update(engine);
    
    
    noStroke();
    fill("White")
    textSize(20)
    text("Score = "+ score,1000,50)


    //L4 Box1

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    
    box1.Score();
    box2.Score();
    box3.Score();
    box4.Score();
    box5.Score();
    //L3 box1

    box6.display();
    box7.display();
    box8.display();
    box9.display();
    
    box6.Score();
    box7.Score();
    box8.Score();
    box9.Score(); 

    //L2 Box1
    box10.display();
    box11.display();
    box12.display();
    
    box10.Score();
    box11.Score();
    box12.Score();
    
    //L1 Box1
    box13.display();
    box14.display();
    
    box13.Score();
    box14.Score();

    //L0 Box1
    box15.display(); 
    box15.Score(); 
    
    
    
    
    
    //L4 Box1

    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    //L3 box1

    box21.display();
    box22.display();
    box23.display();
    box24.display();

    //L2 Box1
    box25.display();
    box26.display();
    box27.display();
    
    //L1 Box1
    box28.display();
    box29.display();

    //L0 Box1
    box30.display();


    log1.display();
    log3.display();
    
    ground.display();

    slingshot.display();
    hexagon.display();
}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed() {
    if(keyCode === 32){
        slingshot.attach(hexagon.body)
    }
    
}
async function getBackgroundImg(){
    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    var responseJSON= await response.json();

    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13);

    if(hour>= 6 && hour<=17){
        bgImg = loadImage("sprites/day.jpg")
    }
    else if(hour>= 17 && hour<=19){
        bgImg = loadImage("sprites/set.jpg")
    }
    else{
       bgImg = loadImage("sprites/night.jpg")
    }
}