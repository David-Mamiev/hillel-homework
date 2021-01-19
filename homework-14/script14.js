function MilitaryResource(type, health, distance) {
  this.type = type;
  this.health = this.maxHealth = health;
  this.distance = this.maxDistance = distance;
}

MilitaryResource.prototype.isReadyToMove = function (){
  return this.distance > 10 ? true : false;
};
MilitaryResource.prototype.isReadyToFight = function (){
  return this.health > 50 ? true : false;
};
MilitaryResource.prototype.restore = function (){
  if(this.distance !== this.maxDistance){
      this.distance = this.maxDistance;
  }
  if(this.health !== this.maxHealth){
      this.health = this.maxHealth;
  }
};
MilitaryResource.prototype.clone = function (){
  const objClone = {}
  for (const key in this) {
      if(typeof(this[key]) == "object") {
          objClone[key] = MilitaryResource.prototype.clone(this[key]);
      }
      else {
          objClone[key] = this[key];
      }
  }
  return objClone;
};


const infantrymanConst = new MilitaryResource('infantryman', 100, 20);
const shooterConst =  new MilitaryResource('shooter', 70, 40);
const doctorConst = new MilitaryResource('doctor', 120, 50);
const tankmanConst = new MilitaryResource('tankman', 150, 70);
const resources = [infantrymanConst, shooterConst, doctorConst, tankmanConst];


function Squad(defaultResources) {
  this.squad = [];
  if (defaultResources) {
    this.combineResources(defaultResources);
  }
}



Squad.prototype.isReadyToMove = function () {
  if (Array.isArray(this.squad)) {
    return this.squad.every(elem => elem.isReadyToMove());  
  }
};
Squad.prototype.isReadyToFight = function (){
  if (Array.isArray(this.squad)) {
    return this.squad.every(elem => elem.isReadyToFight());  
  }
};
Squad.prototype.restore = function () {
    this.squad.forEach((elem) => {elem.restore()})
};
Squad.prototype.getReadyToMoveResources = function () {
  const arrGetReadyToMove = [];
  this.squad.forEach((elem) => {
    if(elem.isReadyToMove()){
      arrGetReadyToMove.push(elem);
    }
  })
  return arrGetReadyToMove;
};
Squad.prototype.combineResources = function (defaultResources) {
  this.squad = [...defaultResources];
};
Squad.prototype.clone = function () {
  const squadCopy = {squad:[]};
  this.squad.forEach((elem) => {
    squadCopy.squad.push(elem.clone());
  })
  return squadCopy;
};

 const squadConst = new Squad(resources);