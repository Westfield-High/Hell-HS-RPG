
const Borealis = new Character("Borealis","knight");
console.log(Borealis.describe());
 function runMelee(Borealis){
  let blades = ["dagger", "axe", "twisted dagger", "battle axe", "sword", "longsword",  "spear"];
  if(checkInitiative(Borealis)){
    pcAttack();
    }
  else {
    npcAttack();
  }


function pcAttack(){
  let action = prompt("you see your enemy. do you chose a [w]eapon or [d]odge.");
    if (action == "w"){
      let weapon = prompt("choose your weapon [b = blade,p = projectile]");
       if(weapon == "b"){
        let blade = blades[Math.floor(Math.random()*8)];
         alert( "you chose a" + blade );
       }
      if(weapon == "p"){
        let projectile = projectiles[Math.floor(Math.random()*4)];
         alert( "you chose a" + projectile );
       }
      pcUseWeapon();
    }
  else if(action == "d"){ 
    pcDodge = true;
   alert(" you prepared to dodge an attack");
  }
}

function pcUseWeapon(){
  let assault = prompt("do you want to [S]tab or s[L]ash");
  if(assault == "s"){
	  Alert("you stabbed" + enemy + "for" + damage);
  }
  else {
	 if(assault == "l"){
	  Alert("you slashed" + enemy + "for" + damage);
	 }
	}
}
  function npcAttack(){
	let choice = ["weapon","dodge"];
	let action = Math.floor(Math.random()*items.length);
	if(action == "1")alert("your" + enemy + " is choosing their weapon.");
	else if(action == "2")alert("your" + enemy + " is choosing to dodge.");
	let weaponChoice = ["blade","projectile"];
	 action = Math.floor(Math.random()*items.length);
	if(action == "1"){
		alert("your" + enemy + " is choosing a bladed weapon.");
		let pickBlade = ["dagger","axe","twisted dagger","battle axe","sword","longsword","spear"];
		Math.floor(Math.random()*item.length);
		let pursuitChoice = ["dodge","attack"];
		Math.floor(Math.random()*item.length);
	}
		npcUseWeapon();
	 if(action == "2")alert("your" + enemy + " chose a projectile.");
	let pickProjectile = ["bow", "staff","ninja star","shuriken"];
		Math.floor(Math.random()*item.length);
  }
function checkInitiative(Borealis){
  let pci = Math.floor(Math.random()*20)+1;
  pci = pci * Borealis.getStealth();
  let npci = Math.floor(Math.random()*20)+1;
  if(pci >= npci) return true;
  else return false;
}
  }
