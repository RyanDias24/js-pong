let leftPaddle;

let rightPaddle;

let ball;

let leftScore = 0;

let rightScore = 0;

function setup() {

  createCanvas(500, 400);

  leftPaddle = new Paddle(true);

  rightPaddle = new Paddle(false);

  ball = new Ball();

}

function draw() {

  background(0);

  

  leftPaddle.show();

  rightPaddle.show();

  leftPaddle.update();

  rightPaddle.update();

  

  ball.show();

  ball.update();

  ball.edges();

  ball.checkPaddle(leftPaddle);

  ball.checkPaddle(rightPaddle);

  

  textSize(32);

  fill(255);

  text(leftScore, width / 4, 50);

  text(rightScore, 3 * width / 4, 50);

}

class Paddle {

  constructor(isLeft) {

    this.w = 10;

    this.h = 80;

    this.y = height / 2 - this.h / 2;

    this.isLeft = isLeft;

    if (isLeft) {

      this.x = 0;

    } else {

      this.x = width - this.w;

    }

    this.ySpeed = 0;

  }

  

  show() {

    fill(130);

    rect(this.x, this.y, this.w, this.h);

  }

  

  update() {

    this.y += this.ySpeed;

    this.y = constrain(this.y, 0, height - this.h);

  }

}

class Ball {

  constructor() {

    this.x = width / 2;

    this.y = height / 2;

    this.radius = 10;

    this.xSpeed = random(6, 7);

    this.ySpeed = random(6, 7);

  }

  

  show() {

    fill(200);

    ellipse(this.x, this.y, this.radius * 2);

  }

  

  update() {

    this.x += this.xSpeed;

    this.y += this.ySpeed;

  }

  

  edges() {

    if (this.y < 0 || this.y > height) {

      this.ySpeed *= -1;

    }

    

    if (this.x - this.radius < 0) {

      rightScore++;

      this.reset();

    }

    

    if (this.x + this.radius > width) {

      leftScore++;

      this.reset();

    }

  }

  

  reset() {

    this.x = width / 2;

    this.y = height / 2;

    this.xSpeed = random(6, 7) * (random() > 0.5 ? 1 : -1);

    this.ySpeed = random(6, 7) * (random() > 0.5 ? 1 : -1);

  }

  

  checkPaddle(paddle) {

    if (this.x - this.radius < paddle.x + paddle.w && 

        this.x + this.radius > paddle.x &&

        this.y - this.radius < paddle.y + paddle.h &&

        this.y + this.radius > paddle.y) {

      this.xSpeed *= -1;

    }

  }

}

function keyPressed() {

  if (keyCode === UP_ARROW) {

    rightPaddle.ySpeed = -10;

  } else if (keyCode === DOWN_ARROW) {

    rightPaddle.ySpeed = 10;

  }

  

  if (key === 'w') {

    leftPaddle.ySpeed = -10;

  } else if (key === 's') {

    leftPaddle.ySpeed = 10;

  }

}

function keyReleased() {

  if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {

    rightPaddle.ySpeed = 0;

  }

  

  if (key === 'w' || key === 's') {

    leftPaddle.ySpeed = 0;

  }

}
  


  
