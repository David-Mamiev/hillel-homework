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

  module.exports = Squad;