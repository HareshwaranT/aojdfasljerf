function back()
{
    window.location = "index.html"
}

function preload() {
    img = loadImage('bear.jpg')
   }

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center(); 
    document.getElementById('status').innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("bear", 30, 75);
    noFill();
    stroke("#FF0000");
    rect(20, 10, 600, 400);
    

}

function modelLoaded()
{
    console.log("Model Loaded!!!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}