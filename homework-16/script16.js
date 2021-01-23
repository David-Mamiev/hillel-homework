const MilitaryResourceConst = require('./classes/class1');
const SquadResourcesConst = require("./classes/class2");

const infantrymanConst = new MilitaryResourceConst('infantryman', 100, 20);
const shooterConst =  new MilitaryResourceConst('shooter', 70, 40);
const doctorConst = new MilitaryResourceConst('doctor', 120, 50);
const tankmanConst = new MilitaryResourceConst('tankman', 150, 70);
const resources = [infantrymanConst, shooterConst, doctorConst, tankmanConst];
const squadConst = new SquadResourcesConst(resources);
console.log(squadConst.isReadyToFight());