class Game{
    constructor(){
        this.title=createElement('h1');

        this.rule1 = createElement('h1');
        this.rules = createElement('h2');
        this.rule2 = createElement('h2');
        this.rule3 = createElement('h2');
        this.rule4 = createElement('h2');
        this.rule5 = createElement('h2');
        

        this.Enterbutton=createButton("ENTER");
        this.monkey=createSprite(800,900,30,70);
        this.monkey.addImage(monkey_img);
        this.monkey.scale=0.5;
        this.monkey.debug=true;
        

        this.ground= createSprite(displayWidth/2,displayHeight,displayWidth,20);
        this.ground.visible=false;

        this.Start = createButton("START");


        
    }
    displayFirstPage(){
        this.title.html("HUNGRY MONKEY");
        this.title.position(800,100);
        this.title.style("color","green");

        this.Enterbutton.position(800,500);
        this.Enterbutton.style("width","100px");
        this.Enterbutton.style("heigth","50px");
        this.Enterbutton.style("background-color","yellow");

        this.Enterbutton.mousePressed(()=>{
            this.Enterbutton.hide();
            this.title.hide();
            this.displaySecondPage();
        })

        
        

    }
     
    displaySecondPage(){
        this.rule1.html("RULES:-");
        this.rule1.position(100,100);

        this.rules.html("Consume 1 yellow banana = 1 point");
        this.rules.position(100,130);

        this.rule2.html("Consume 1 black banana; game over");
        this.rule2.position(100,160);

        this.rule3.html("By chance the monkey misses to step on the cloud, the monkey will fall, hence game over");
        this.rule3.position(100,190);

        this.rule4.html("Press left and up arrow together to make monkey jump on the cloud to its left side");
        this.rule4.position(100,220);

        this.rule5.html("Press left and up arrow together to make monkey jump on the cloud to its left side");
        this.rule5.position(100,250);


        this.Start.position(800,500);

        this.Start.mousePressed(()=>{
            this.Start.hide();
            this.title.hide();
            this.rule1.hide();
            this.rules.hide();
            this.rule2.hide();
            this.rule3.hide();
            this.rule4.hide();
            this.rule5.hide();

            console.log("EnterbuttonPressed");

            gameState="play";
        })


       
    }





    displayThirdPage(){
     game.spawnClouds();

     if(keyDown(UP_ARROW)){
         this.monkey.y=this.monkey.y-12;
     }

     if(keyDown(LEFT_ARROW)){
         this.monkey.x=this.monkey.x-3;
     }

     if(keyDown(RIGHT_ARROW)){
         this.monkey.x=this.monkey.x+3;
     }

     this.monkey.velocityY=this.monkey.velocityY+0.08;
     this.monkey.collide(this.ground);
     if(YellowBananaGroup.isTouching(this.monkey)){

     }
    //text("Score: "+ score, 500,50);
  
 // if (gameState===PLAY){
    
 //}
     



    drawSprites();
 }


    spawnClouds(){
        if (frameCount % 60 === 0) {
            var cloud = createSprite(600,120,40,10);
            cloud.x = Math.round(random(200,displayWidth));
            cloud.addImage(cloud_img);
            cloud.scale = 1.5;
            cloud.velocityY = 3;
            
            cloud.setCollider("rectangle",0,0,5,10);
             //assign lifetime to the variable
            cloud.lifetime = 200;
            cloud.debug=true;
            
            //adjust the depth
            cloud.depth = this.monkey.depth;
            this.monkey.depth = this.monkey.depth + 1;
            
            //add each cloud to the group
            cloudsGroup.add(cloud);
            var YellowBanana = createSprite(600,120,40,10);
            YellowBanana.x = cloud.x+60;
            YellowBanana.y = cloud.y-100;
            YellowBanana.addImage( yellow_img);
            YellowBanana.scale = 0.25;
            YellowBanana.velocityY = 3;
            
             //assign lifetime to the variable
             YellowBanana.lifetime = 200;
            
            //adjust the depth
            YellowBanana.depth = this.monkey.depth;
            this.monkey.depth = this.monkey.depth + 1;
            
            //add each cloud to the group
            YellowBananaGroup.add(YellowBanana);
            var number = Math.round(random(1,4));
            if (number ===1){
                var BlackBanana = createSprite(600,120,40,10);
                BlackBanana.x = cloud.x-60;
                BlackBanana.y = cloud.y-100;
                BlackBanana.addImage( black_img);
                BlackBanana.scale = 0.25;
                BlackBanana.velocityY = 3;
                
                 //assign lifetime to the variable
                 BlackBanana.lifetime = 200;
                
                //adjust the depth
                BlackBanana.depth = this.monkey.depth;
                this.monkey.depth = this.monkey.depth + 1;
                
                //add each cloud to the group
                BlackBananaGroup.add(BlackBanana);
            }
  

          }
    }

    


}