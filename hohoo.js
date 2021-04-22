class connection{
    constructor(a,b){
    var options={
    bodyA:a,
    bodyB:b,
    stiffness:0.4,
    lenght:10
    
    
    }
    this.const=Constraint.create(options)
    World.add(world,this.const)
    }
    
    display(){
    
    line(this.const.bodyA.position.x,this.const.bodyA.position.y,this.const.bodyB.position.x,this.const.bodyB.position.y)
    
    }}
    