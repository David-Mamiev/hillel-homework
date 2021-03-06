class MilitaryResource {
    constructor(type, health, distance){
      this.type = type;
      this.health = this.maxHealth = health;
      this.distance = this.maxDistance = distance;
    }
    isReadyToMove() {
      return this.distance > (this.maxDistance * 20)/100;
    }
    isReadyToFight(){
      return this.health > (this.maxHealth*50)/100;
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