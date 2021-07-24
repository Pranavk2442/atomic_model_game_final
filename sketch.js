var bgimg;

var start,startimg;

var gameState=0;

var questionDisplayed=false;

var Qnum;



var Qarray=["Who is the first person to come up with atomic theory, and mention two points that he came up with.",
            "What is the first statement that J.J Thompson proposed?  ",
            "What role did Ernest rutherford serve in long term?",
             "Who was JJ Thomson?",
             "Who dicovered neutrons? ",
             "Is Niel Bohr a - physicist, chemist or philosophist?",
             "Who created which atomic model?",
             "What is the purpose of cathode ray tube?",
             "What is the charge of gamma rays?",
             "Compared to the nucleus, approximately how big is the diameter of an atom?"];

var answers=[["John Dalton-All matter is made of atoms, Atoms combine in whole numbers.","Democritus-All matter is made of tiny particles called atoms which can't be broken into smaller parts.","Thomson-Atoms are made of electrons, Atoms cannot be destroyed.","Thomson-All matter is made of atoms, Atoms are made of electrons."],
            [" An atom is a particle that is unbreakable","Atoms have three subatomic particles","Atoms have an internal structure","Atoms have 1 whole charge that is only positive and no negative charges"],
            ["Discovery of protons","Atom is empty and has no specific charge as they cancel each other out","Postulated the nuclear structure of the atom, discovered alpha and beta rays","Discovered neutrons"],
            ["Chemist who discovered electrons.","Physicist who came up with Plum pudding model","Scientist who came up with Billiards ball model", "Physicist who came up with the first atomic model"],
            ["James Chadwick", "John Dalton", "Ernest Rutherford"," Niels Bohr"],
            ["Physicist"," Chemist"," Philosophist","All of the above"],
            ["Rutherford-Plum Pudding model","Thomson-Billiards Ball model","Niels Bohr-Nuclear Model","John Dalton-Billiard Ball Model"],
            ["To emit high speed protons","To emit high speed electrons", "To knock the neutrons out of the atom ","To emit a green light"],
            ["No charge", "postive charge", "negative charge","Unknown"],
            ["The diameter of a nucleus is 10,000 less than the one of an atom.", "The diameter of a nucleus is 1000 less than the one of an atom.","The diameter of a nucleus is 1,000,000 less than the one of an atom.", "The diameter of a nucleus is 100,000 less than the one of an atom."]];

var correctAnswers=[0,2,2,1,0,0,3,1,0,3];

var answer1,answer1img,answer2,answer2img,answer3,answer3img,answer4,answer4img;

var startSound,correctAns,wrongAns;

var score=0;

var yay1,yay1img;

var response1,response1img;

var yay2,yay2img;

var response2,response2img;


var wrongAnsSound;





function preload(){

    bgimg=loadImage("atombg.jfif");
    startimg=loadImage("startButton.png");
    answer1img=loadImage("blue.png");
    answer2img=loadImage("blue2.png");
    answer3img=loadImage("blue3.png");
    answer4img=loadImage("blue4.png");

    response1img=loadImage("response1.png");

    response2img=loadImage("response2.png");

    yay1img=loadImage("yay1.png");
    yay2img=loadImage("yay2.png");

    startSound=loadSound("startSound.wav");
    correctAns=loadSound("correctAns.wav");
    wrongAnsSound=loadSound("wrongAns.wav");

}

function setup(){
    createCanvas(1535,720);

    start=createSprite(750,360);
    start.addImage(startimg);
    start.scale=0.3;
    start.visible=false;

   
    answer1=createSprite(150,180);
    answer1.addImage(answer1img);
    answer1.visible=false;
    answer1.scale=0.3;
    
    answer2=createSprite(150,270);
    answer2.addImage(answer2img);
    answer2.visible=false;
    answer2.scale=0.3;
    
    answer3=createSprite(150,360);
    answer3.addImage(answer3img);
    answer3.visible=false;
    answer3.scale=0.3;

    answer4=createSprite(150,450);
    answer4.addImage(answer4img);
    answer4.visible=false;
    answer4.scale=0.3;

    yay1=createSprite(520,300);
    yay1.addImage(yay1img);
    yay1.visible=false;

    response1=createSprite(600,150);
    response1.addImage(response1img);
    response1.visible=false;

    yay2=createSprite(520,300);
    yay2.addImage(yay2img);
    yay2.visible=false;

    response2=createSprite(600,150);
    response2.addImage(response2img);
    response2.visible=false;

}

function draw(){

    background(bgimg);

    textSize(30);

    fill("black");

    text("Score: "+score,700,600);

    if(gameState==0){

        start.visible=true;

        textSize(30);
        fill("black");
        text("Press the start button to start the game!",500,160);

        


        text("Click the blue boxes to select your answer.",500,230);

       
        if(mousePressedOver(start)){
            gameState=1;
            start.visible=false;
            startSound.play();

        }

    }

    if(gameState===1){



        if(!questionDisplayed){
            Qnum=Math.floor(Math.random()*Qarray.length);
            console.log("Qnum is"+Qnum);
            questionDisplayed = true;
        }
        
            textSize(30);

            fill("black");

            text(Qarray[Qnum],100,100);

            console.log(Qarray[Qnum]);

            var i=0 
            while(i<answers[Qnum].length){
                textSize(30);
                fill("black");
                text(answers[Qnum][i],200,190+i*90);
                i++;
           
            }
    
        answer1.visible=true;
        answer2.visible=true;
        answer3.visible=true;
        answer4.visible=true;

    var correctAnswer=correctAnswers[Qnum];

    if(mousePressedOver(answer1)){
        if(correctAnswer===0){
            answeredCorrectly(Qnum);
        } else {
            answerInCorrect(Qnum);
        }
    }

     else if(mousePressedOver(answer2)){
        if(correctAnswer===1){
            answeredCorrectly(Qnum);
        } else {
            answerInCorrect(Qnum);
        }
     }

     else if(mousePressedOver(answer3)){
        if(correctAnswer===2){
            answeredCorrectly(Qnum);
        } else {
            answerInCorrect(Qnum);
        }
     }

     else if(mousePressedOver(answer4)){
        if(correctAnswer===3){
            answeredCorrectly(Qnum);
        } else {
            answerInCorrect(Qnum);
        }
     }


     
    

    }

    if(gameState===2){
        textSize(30);
       // fill("black");
       // text("You chose the correct answer!",550,150);

        response1.visible=true;
        yay1.visible=true;

        response1.velocityX=7;
        yay1.velocityX=7;
        
        answer1.visible=false;
        answer2.visible=false;
        answer3.visible=false;
        answer4.visible=false;
        


        if(response1.x>1535 && yay1.x>1535){
            gameState=1;
            yay1.visible = false;
            response1.visible = false;
            yay1=createSprite(520,300);
            yay1.addImage(yay1img);
            yay1.visible=false;
        
            response1=createSprite(600,150);
            response1.addImage(response1img);
            response1.visible=false;
        
            if(Qarray.length === 0) {
                gameState = 4;
                console.log("No Questions left..." + score);
    
            }
        }

    }

    if(gameState===3){
        textSize(30);
       // fill("black");
       // text("You chose the correct answer!",550,150);

       console.log("?????????????????????? " + gameState);

        response2.visible=true;
        yay2.visible=true;

        response2.velocityX=7;
        yay2.velocityX=7;
        
        answer1.visible=false;
        answer2.visible=false;
        answer3.visible=false;
        answer4.visible=false;
        


        if(response2.x>1535 && yay2.x>1535){
            gameState=1;
            yay2.visible = false;
            response2.visible = false;
            yay2=createSprite(520,300);
            yay2.addImage(yay2img);
            yay2.visible=false;
        
            response2=createSprite(600,150);
            response2.addImage(response2img);
            response2.visible=false;
        
            if(Qarray.length === 0) {
                gameState = 4;
                console.log("No Questions left..." + score);
    
            }
        }

    }

    if(gameState===4){
        textSize(30);
        fill("black");
        text("You've finished the quiz!",600,300);
        text("You got a score of "+score+"/10",600,340);
    }


    drawSprites();
}

function answeredCorrectly(Qnum){
    correctAns.play();
       
    gameState=2;
    score+=1;

    Qarray.splice(Qnum,1);
    answers.splice(Qnum,1);
    correctAnswers.splice(Qnum,1);
    questionDisplayed = false;

    console.log(Qarray.length);
    console.log(answers.length);
    console.log(correctAnswers.length);

}

function answerInCorrect(Qnum){
    wrongAnsSound.play();   
    gameState=3;
    
    Qarray.splice(Qnum,1);
    answers.splice(Qnum,1);
    correctAnswers.splice(Qnum,1);
    questionDisplayed = false;

    console.log(Qarray.length);
    console.log(answers.length);
    console.log(correctAnswers.length);

}

