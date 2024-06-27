function back()
{
    window.location = "index.html"
}

function preload() {
    img = loadImage('OIP.jpeg')
   }

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center(); 
    document.getElementById('status').innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("milk", 120, 30);
    noFill();
    stroke("#FF0000");
    rect(100, 10, 480, 400);
    

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