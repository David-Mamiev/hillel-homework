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
      return new MilitaryResource(this.type, this.health, this.distance);
    }
  }

  module.exports = MilitaryResource;