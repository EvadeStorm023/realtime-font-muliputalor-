function preload(){

}
function setup(){
video = createCapture(VIDEO);
video.size('550,500')

canvas = createCanvas(500,500)
canvas.position(700,200)
background('grey')

poseNet = ml5.poseNet(video,modelLoaded)
poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log('poseNet model has been loaded.')
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
    }
}

function draw(){
    background('grey')
}