var s;
var scl = 20;

var food;

var eatSound;
var deathSound;

function preload() {
    eatSound = loadSound ("sounds/eatFood.wav");
    deathSound = loadSound ("sounds/death.wav")
}

function setup() {
    createCanvas(600, 600);
    s = new Snake();
    frameRate(10);
    pickLocation();

}

function pickLocation() {
    var cols = floor(width / scl);
    var rows = floor(height / scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function mousePressed() {
    s.total++;
}

function draw() {
    background(8, 8, 8);

    if (s.eat(food)) {
        eatSound.play();
        pickLocation();
    }
    s.death();
    s.update();
    s.show();


    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        s.dir(-1, 0);
    }
}
