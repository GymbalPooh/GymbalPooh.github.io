function setup() {
    createCanvas(1000,500);
    textSize(20);
    
    fill(255, 255, 255);
    rect(0,0,1000,500);
    fill(0,255,0);
    noStroke();
    stroke(0,0,0);

}

let t = "Draw Something!";

function draw()
{

text(t, 400, 0, 100, 80);}
function mouseDragged()
{
strokeWeight(3);
fill(120,180,0)
line(mouseX, mouseY, pmouseX, pmouseY);
}