
function setup(){
	createCanvas(800, 600);
	angleMode(DEGREES)

}
function draw(){
	background(255);
	translate(width/2,height/2);
	
	stroke(41,43,96);
	strokeWeight(3);
	fill(82,123,182)
	ellipse(0,0,450,450);
	
	push();
	if(hour()>12){
	  var h = hour()-13
	}
	else{
    var h = hour();
	}
	rotate((h+1)*(360/12));
	stroke(171,161,187);
	strokeWeight(9);
	line(0,0,0,100);
	pop();
	
	push();
	rotate((minute()+1)*(360/60));
	stroke(171,161,187);
	strokeWeight(6);
	line(0,0,0,180);
	pop();
	
	push();
	rotate((second()+1)*(360/60));
	stroke(171,161,187);
	strokeWeight(3);
	line(0,30,0,-220);
	pop();
	
	fill(41,43,96);
	ellipse(0,-200,10,10);
	ellipse(200,0,10,10);
	ellipse(0,200,10,10);
	ellipse(-200,0,10,10);
	
}