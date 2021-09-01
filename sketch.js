const w = 5000
const s = 25
const d = w/s

function setup() {
  createCanvas(w, w, SVG);

  background(255, 255, 255);

}

function draw() {
  for(let y = 0;y < height;y += d){
    if(y%(d*2)===0){
      for(let x = 0;x < width; x+=d*2){
        push()
        translate(x,y)
        drawRect()
        pop()
      }
    } else {
      for(let x = -d;x < width;x+=d*2){
        push()
        translate(x,y)
        drawRect()
        pop()
      }
    }
  }
  save("ichinojitsugi_03.svg");
  print("saved svg");
  noLoop();
}

function drawRect() {
  push()

  // 04 Deep Blue
  stroke(7,160,220)

  // // 03 Deep Red
  // stroke(200,18,17)

  // // 02 Dark Gold
  // stroke(240,213,136)

  // // 01 Dark Green
  // fill("#344e41")


  strokeWeight(d/10)

  // 04 Light Blue
  fill(15, 180, 225);

  // // 03 Light Red
  // fill(245, 67, 65);

  // // O2 Light Gold
  // fill(233, 203, 130)

  // // 01 Light Green
  // fill("#52b788");


  rect(0, 0, d*2, d)
  pop()
}