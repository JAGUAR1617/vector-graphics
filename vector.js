void setup() {
  size(1200, 600, P2D);
}
void draw() {
  background(145);
  strokeWeight(2);
  stroke(0);
  noFill();
  translate(width/2, height/2);
  ellipse(0, 0, 10, 10);
  PVector mouse = new PVector(mouseX, mouseY);
  PVector center = new PVector(width/2, height/2);
  mouse.sub(center);
  mouse.mult(0.5);
  float m = mouse.mag();
  for (int i = 0; i<50; i++ ) {
    rotate(m);
    rect(0, 0, -m, 10);
    rect(0, 0, m, -10);
    rect(0, 0, -10, -m);
    rect(0, 0, 10, m);
    ellipse(0, 0, mouse.x, mouse.y);
  }
}
