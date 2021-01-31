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
      } else {
        return false;
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
      return this.squad.filter(elem => elem.isReadyToMove());
    }
    clone() {
      const squadCopy = this.squad.map(function(elem) {
        return elem.clone();
      })
      return new Squad (squadCopy);
    }
  }

  module.exports = Squad;