let objectArray=[];
const locations = [
    {
        name: "main entrance",
        "button text": ["pick the lock", "try to break down the door", "steal an ID of someone", "follow someone into the building"],
        "button functions": [pickLock],
        text: "You are at the front door of a school. You see a sign that says \"Hell Highschool.\""
    }]
	
	
function startProcess(){
  const csvData = document.getElementById('csvInput').value;
  objectArray = processData(csvData);
  console.log(objectArray[1]);
}

function processData(csvData) {
  const lines = csvData.split('\n');
  let result = [];
  for (let i = 0; i < lines.length; i++) {
    const currentline = lines[i];
    result.push(currentline);
  }
  return result;
}

function showCharacter(charName){
	console.log("showCharacter");
  let playerOne = charName;
  let myName = prompt("what do you want to name your character ?");
  playerOne.name = myName; 
  let classPic = document.getElementById("classPic");
  let message = document.createElement("p");
  message.innerHTML = playerOne.describe() + playerOne.illustrate();
  classPic.innerHTML = "";
  classPic.appendChild(message);
  let classButtons = document.getElementById("classButtons");
  classButtons.style.display = "none";
 }

function randomRoom(){
  let classPic = document.getElementById("classPic");
  // classPic.innerHTML = "this is a random room.";
  let enter = confirm("do you want to enter this room");
  if(enter == true){
    alert("you have entered a random room");
    let roomType = Math.floor(Math.random()*6)+1;
    // roomType = 3;
    switch (roomType){
      case 1: 
        bossRoom();
        break;
      case 2: 
        treasureRoom();
        break;
      case 3: 
        eventRoom();
        break;
      case 4: 
        classRoom();
        break;
      case 5: 
        miniDungeon();
        break;
      case 6: 
        worryRoom();
        break;

      default: 
    }
  }
  else if(enter == false){
    alert('you walk pass the door');
  }
}
 
function bossRoom(){
    classPic.innerHTML = "you are in the boss Room";
  }

function treasureRoom(){
    let setmyInventory = ["stick"]
      let chest = confirm("you see a treasure chest do you wish to open it?");
    let items = Math.floor(Math.random()*5)+1; 
    alert("you have received " + items + " items");

    let itemList = ['sword','red potion','blue potion','staff','bow','axe','dagger','ninja star','long sword','shuriken', 'twisted dagger','battle axe', 'spear'];
   for(let item = 1;item < items; item++){
    setmyInventory.push(itemList[Math.floor(Math.random()*itemList.length)]);
   }
    console.log(setmyInventory.toString()); 
  }

function eventRoom(){
     alert("you are in the event room as you continue there are many things that could happened")
    let events = Math.floor(Math.random()*4)+1;

      switch(events){
        case 1:
          portal();
          break;
        case 2:
          allieIntrouble();
          break;
        case 3:
          demonUpgrade();
          break;
        case 4:
          holyUpgrade();
          break;

      default:
      }
}

function portal(){
      alert("you see a strange portal its like nothing you've ever seen before ")
      let enterPortal = confirm("do you wish to enter this portal")
      if(enterPortal == true){
        portalRoom();
      }
      else alert("you walk by the portal and exited the room")
    }

function allieIntrouble(){
      alert(" on entering the room you see 5 goblins surrounding someone this someone looks like he could be help to you")
      let help = confirm("do you want to help him or leave hime to die")
      if(help == true){
        alert("you help the random person")
        let choice = Math.floor(Math.random()*2)+1;

          switch(choice){
            case 1:
              alert("the random person stabs you and runs away");
              break;
            case 2:
              alert("the person thanks you and runs away only to be eaten by a dragon");
              break;
              default:
            }
        }
        else alert("you hear a cry as you walk out the door");
      }

function demonUpgrade(){
    let classPic = document.getElementById("classPic");
    alert("you see a upgrade");
    let strengthIncrease = confirm("do you wish to pick up the armour");
    if(strengthIncrease == true){
      alert("you feel a demonic power as you put on the armour");
      classPic.innerHTML = "your stats increase over 5 times what they were"
      }
      else alert("you walk by the very powerful armour");
    }

function holyUpgrade(){
      let classPic = document.getElementById("classPic");
      alert("you see a upgrade");
      let lightIncrease = confirm("do you wish to pick up the armour");
      if(lightIncrease == true){
        alert("you feel god like power as you put on the armour");
        classPic.innerHTML = "your stats increase over 5 times what they were"
        }
        else alert("you walk by the very powerful armour");
    }

function classRoom(){
     classPic.innerHTML = "you are in the class Room";
  }

function miniDungeon(){
     classPic.innerHTML = "you have entered a mini-Dungeon";
  }

function worryRoom(){
     classPic.innerHTML = "you are in the worry Room";
     let worries = []
  }

function portalRoom(){
    let classPic = document.getElementById("classPic");
      alert("you have entered a random room");
      let roomType = Math.floor(Math.random()*5)+1;
      switch (roomType){
        case 1: 
          bossRoom();
          break;
        case 2: 
          treasureRoom();
          break;
        case 3: 
          classRoom();
          break;
        case 4: 
          miniDungeon();
          break;
        case 5: 
          worryRoom();
          break;
        default: 
    }
}

function update(location) {
    //monsterStats.style.display = "none";
	button1.innerText = location["button text"][0];
	button2.innerText = location["button text"][1];
	button3.innerText = location["button text"][2];
	button1.onclick = location["button functions"][0];
	button2.onclick = location["button functions"][1];
	button3.onclick = location["button functions"][2];
	classPic = document.getElementById("classPic");
  let message = document.createElement("p");
  message.innerHTML = location.text; 
  classPic.appendChild(message);   
}
function enterSchool() {
    update(locations[0]);
}

function pickLock(){
	alert("you have chose to pick the lock of the school");
	let lock = prompt("do you want to pick the lock by [h]and or [m]agic");
	if(lock == "h"){
		let chance = Math.floor(Math.random()*2)+1;
		switch(chance){
			case 1:
				alert("you have been spotted and reported");
				pickLock();
				break;
			case 2:
				alert("you picked the lock someone saw you but they shrugged it off")
				break
			default:
		}
	}
	else if(lock == "m" ){
		alert("you have entered the building without a problem")
	}
}
