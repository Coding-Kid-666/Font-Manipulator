user_text = "Aryan";

Wrist_Left_X = 0;
Wrist_Right_Y = 0;
Difference = 0;

function preload(){
}

function setup(){
    video = createCapture(VIDEO);
    video.size(560, 500);
    canvas = createCanvas(560, 450);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    user_text = document.getElementById("text").value;
    background("#284646");
    fill("#f5a00f");
    stroke("#f53d0f");
    text(user_text, 0, 225)
    document.getElementById("square").innerHTML = "The font size will be: " + Difference + "px!";
    textSize(Difference);
}

function modelLoaded(){
    console.log("Posenet is successfully Initialized.")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        Wrist_Left_X = results[0].pose.leftWrist.x;
        Wrist_Right_X = results[0].pose.rightWrist.x;
        Difference = Wrist_Left_X - Wrist_Right_X;
        console.log(Difference);
    }
}