function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}
img = "";

function preload() {
    img = loadImage('dog_cat.jpg');
}

function draw() {
    Image(img, 0, 0, 640, 420);
    FileList("#FF0000");
    Text("Dog", 45, 75);
    noFill();        
    stroke("#FF0000");
    rect(30, 60, 450, 350);56
}