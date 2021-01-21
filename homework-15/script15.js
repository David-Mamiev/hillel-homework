class MilitaryResource {
    constructor(type, health, distance){
      this.type = type;
      this.health = this.maxHealth = health;
      this.distance = this.maxDistance = distance;
    }
    isReadyToMove() {
      return this.distance > 10;
    }
    isReadyToFight(){
      return this.health > 50;
    }
    restore(){
      if(this.distance !== this.maxDistance){
        this.distance = this.maxDistance;
    }
    if(this.health !== this.maxHealth){
        this.health = this.maxHealth;
    }
    }
    clone(){
      const objClone = JSON.parse(JSON.stringify(this));
      // for (const key in this) {
      //     if(typeof(this[key]) == "object") {
      //         objClone[key] = clone(this[key]);
      //     }
      //     else {
      //         objClone[key] = this[key];
      //     }
      // }
  
      return objClone;
    }
  }
  const infantrymanConst = new MilitaryResource('infantryman', 100, 20);
  const shooterConst =  new MilitaryResource('shooter', 70, 40);
  const doctorConst = new MilitaryResource('doctor', 120, 50);
  const tankmanConst = new MilitaryResource('tankman', 150, 70);
  const resources = [infantrymanConst, shooterConst, doctorConst, tankmanConst];
  
  
  class Squad {
    constructor(defaultResources){
      this.squad = [];
      if(defaultResources){
        this.combineResources(defaultResources);
      }
    }
    isReadyToMove() {
      if (Array.isArray(this.squad)) {
        return this.squad.every(elem => elem.isReadyToMove());  
      }
    }
    isReadyToFight() {
      if (Array.isArray(this.squad)) {
        return this.squad.every(elem => elem.isReadyToFight());  
      }
    }
    restore() {
      this.squad.forEach((elem) => {elem.restore()})
    }
    combineResources(defaultResources) {
      this.squad = [...defaultResources];
    }
    getReadyToMoveResources(){
      const arrGetReadyToMoveResources = this.squad.filter(elem => elem.isReadyToMove()); 
      return arrGetReadyToMoveResources;
    }
    clone() {
      const squadCopy = {squad:[]};
      this.squad.forEach((elem) => {
      squadCopy.squad.push(elem.clone());
    })
    return squadCopy;
    }
  }
  
  
  const squadConst = new Squad(resources);
  console.log(squadConst.squad[0].clone());