Status="";
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function draw(){
image(video,0,0,480,380);
}
function preload(){
    video=createCapture();
    if (Status !=""){
        objectDetector.detect(video,gotResult);
        for(i= 0; i<object.length;100){
            document.getElementById("Status").innerHTML = "status:object detected";
            document.getElementById("number_of_object").innerHTML ="number of detected are:"+object.length
        }
        Fill("#ff0000");
        percent = floor(object.confidence*100);
        text(object[i].lable+""+percent+"%",object[i].x+15 , object[i].y.x+15);
        nofill();
        stroke();
        rect(object[i].x,object[i].y,object[i].width,object[i].hight);
    }

    
}
function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML=" Status : Detecting Objects";
    object_name=document.getElementById("object_name").value;
}
function modelLoaded(){
    console.log("model Loaded");
    Status=true;
    video.speed(1);
    video.volume(0);
}
