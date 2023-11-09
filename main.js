img = "";
Status = "";
objects = [];
objectDetector = "";




function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("Status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  Status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}

function draw()
{
    
    fill("#FF0000");
    text("bed",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);

}