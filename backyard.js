function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status: Detecting Objects"
  }
  img = "";
  status = "";
  objects = [];
  
  function modelLoaded() {
    console.log("model loaded");
    status = true;
    objectDetector.detect(img, gotResult);
  }
  
  function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    objects = results;
  }
  
  
  function preload() {
    img = loadImage('backyard.jpg');
  }
  
  function draw() {
    image(img, 0, 0, 640, 420);
    if (status != "") {
      for (i = 0; i < objects.length; i++) {
        document.getElementById("status").innerHTML = "status: Objects Detected"
        fill("#9123f7");
        percent = floor(objects[i].confidence*100);
        text(objects[i].label + " "+ percent + "%", objects[i].x, objects[i].y);
        noFill();
        stroke("#9123f7");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
  
      }
  
  
  
    }
  
  }