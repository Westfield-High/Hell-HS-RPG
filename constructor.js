
 const classData = [["knight",1200,150,"ace.png"],["holy_knight",2250,350,"ace.png"],["theif",1000,150,"ace.png"],["assassin",2007,8000,"ace.png"],["criminal",750,200,"ace.png"],["cult",100,5,"ace.png"],["mage",1000,600,"ace.png"],["rogue",8000,3000,"ace.png"]];

class Character {
  constructor(name, charClass) {
    this.name = name;
    this.charClass = charClass;
    this.health = setHP(charClass);
    this.strength = setDamage(charClass);
    this.picture = setPhoto(charClass);
    this.xp = 0; // XP is always zero for new characters

  }
  // Return the character description
  // Return the character description
describe() {
    return `${this.name} is a ${this.charClass} with ${this.health} health points, ${this
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
     return classData[myClass][3];
   }
  }
}

function setup(){
  classButtons.style.display = "block";
  h2.style.display = "none" 
}

function getName(){
  return this.name;
}
