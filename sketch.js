function setup() {
	var cnv = createCanvas(windowWidth, windowHeight);
	cnv.position(0, 0);
	cnv.style('z-index', -1);
}

let x = 1;
let y = 1;
let easing = 0.15;
let t = 0;

function draw() {
	background(15, 15);
  	let targetX = mouseX;
  	let dx = targetX - x;
  	x += dx * easing;

  	let targetY = mouseY;
  	let dy = targetY - y;
 	y += dy * easing;

	push();
	translate(x, y);
	noStroke();
	fill(125, 125, 125);
	ellipse(0, 0, 125);
	pop();

	for (let px = 0; px <= windowWidth; px = px + 60) {
		for (let py = 0; py <= windowHeight; py = py + 60) {
			const xAngle = map(0, 0, windowWidth, -4 * PI, 4 * PI, true);
			const yAngle = map(0, 0, windowHeight, -4 * PI, 4 * PI, true);
			const angle = xAngle * (px / windowWidth) + yAngle * (py / windowHeight);
		
			const myX = px + 20 * cos(2 * PI * t + angle);
			const myY = py + 20 * sin(2 * PI * t + angle);
			
			push();
			noStroke();
			fill(150, 150, 150)
		  	ellipse(myX, myY, 15);
			pop();
		}
	}
	
	t = t + 0.005;
}