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
      const squadCopy = this.squad.map(function(elem) {
        return elem.clone();
      })
      return new Squad (squadCopy);
    }
  }

  module.exports = Squad;