
 var pcDodge = false;
 const classData = [["knight",1200,150,1,"ace.png"],["holy_knight",2250,350,1,"ace.png"],["theif",1000,150,5,"ace.png"],["assassin",2007,8000,10,"ace.png"],["criminal",750,200,1,"ace.png"],["cult",100,5,1,"ace.png"],["mage",1000,600,1,"ace.png"],["rogue",8000,3000,1,"ace.png"]];


class Character {
  constructor(name, charClass) {
    this.name = name;
    this.charClass = charClass;
    this.health = setHP(charClass);
    this.strength = setDamage(charClass);
    this.picture = setPhoto(charClass);
	this.stealth = setStealth(charClass);
    this.xp = 0; // XP is always zero for new characters
	this.backPack = setInventory();
  }
  // Return the character description
  // Return the character description
describe() {
    return `${this.name} is a ${this.charClass} with ${this.stealth} stealth, ${this.health} health points, ${this
  .strength} as strength and ${this.xp} XP points`;
  }
  illustrate(){
    return  "<img src =\""+`${this.picture}`+ "\">"
  }
}

function broadcast(message){
  classpic.innerHTML = describe();
}

function setHP(charClass) {
 for(let myClass = 0; myClass < classData.length; myClass++){
   if(charClass == classData[myClass][0]){
     return classData[myClass][1];
   }
  }
}

function setDamage(charClass) {
 for(let myClass = 0; myClass < classData.length; myClass++){
   if(charClass == classData[myClass][0]){
     return classData[myClass][2];
   }
  }
}

function setPhoto(charClass) {
 for(let myClass = 0; myClass < classData.length; myClass++){
   if(charClass == classData[myClass][0]){
     return classData[myClass][4];
   }
  }
}
function setStealth(charClass) {
 for(let myClass = 0; myClass < classData.length; myClass++){
   if(charClass == classData[myClass][0]){
     return classData[myClass][3];
   }
  }
}

function setup(){
  classButtons.style.display = "block";
  h2.style.display = "none" 
}
function setInventory() {
 let myInventory = ["stick"];
  return myInventory;
}

function getName(){
  return this.name;
}
function getStealth() {
  return this.stealth;
}

function getHP() {
  return this.HP;
}

function getDamage() {
  return this.Damage;
}

function getPhoto() {
  return this.Photo;
}

function getInventory() {
  return this.backPack;
}