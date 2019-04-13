let balls = [];

function setup(){
    let cvn = createCanvas(window.innerWidth,window.innerHeight);
    cvn.parent('particles');
}



function draw(){
    clear();
    if(balls.length < 10){
        if(random(1) < 0.5){
            balls.push(new ball(width/2,height/2));
        }

    }

    

    for(let i = 0 ; i < balls.length ; i++){
        balls[i].behaviors();
        balls[i].update();
        balls[i].show();
        if(balls[i].dead() == true){
            balls.splice(i,1);
            balls.push(new ball(width/2,height/2));
        }
            
    }

    for(let i = 0 ; i < balls.length ; i++){
 

        let d = dist(balls[i].pos.x,balls[i].pos.y,mouseX,mouseY);
            if(d <= 200){
                var m = map(d,200,0,0,1);
                push();
                stroke('rgba(200,255,200,'+m+')');
                
                line(balls[i].pos.x,balls[i].pos.y,mouseX,mouseY);
                pop();
            }
   
    }

    
    
}

function ball (x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(random(-1,1),random(-1,1));
    this.acc = createVector();
    this.target = createVector(random(width),random(height));
    this.maxspeed = 5;
    this.maxforce = 0.4;

    this.behaviors = () => {
        var arrive= this.arrive(this.target);
        this.applyforce(arrive);
    }

    this.applyforce = (f) => {
        this.acc.add(f);
    }

    this.arrive = (target) => {
        var desired = p5.Vector.sub(target,this.pos);
        var d = desired.mag();
        var speed = this.maxspeed;
        if(d < 200){
            speed = map(d,0,100,0,this.maxspeed);
        }
        if(d < 1){
            this.target.set(random(this.pos.x-100,this.pos.x+100),random(this.pos.y-100,this.pos.y+100));
        }
        desired.setMag(speed);
        var steer = p5.Vector.sub(desired,this.vel);
        steer.limit(this.maxforce);
        return steer;
    }

    this.seek = (target) => {
        var desired = p5.vector.sub(target,this.pos);
        desired.setMag(this.maxspeed);
        var steer = p5.vector.sub(desired,this.vel);
        steer.limit(this.maxforce);
        return steer;
    }

    this.update = () =>{

        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.mult(0);
    }

    this.dead = () => {
         
        if(this.pos.x > width || this.pos.x < 0)
           return true;
        if(this.pos.y > height || this.pos.y < 0)
            return true;
        
        return false;
    }
    
    this.show = () =>{
        let d = dist(this.pos.x,this.pos.y,mouseX,mouseY);
        var trans = map(d,200,0,0,255);
        fill(255,trans);
        noStroke();
        ellipse(this.pos.x,this.pos.y,5.5);
     
    }

}