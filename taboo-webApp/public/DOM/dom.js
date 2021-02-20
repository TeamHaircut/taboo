const infoDiv = document.querySelector('.info-div');

const roomUserTable = document.querySelector('.userlist-table');

//const chatMessages = document.querySelector('.chat-messages');

const cardColor = document.getElementById("tabooCardColor");
const guessWord = document.querySelector('.guessWord');
const taboo0 = document.querySelector('.taboo0');
const taboo1 = document.querySelector('.taboo1');
const taboo2 = document.querySelector('.taboo2');
const taboo3 = document.querySelector('.taboo3');
const taboo4 = document.querySelector('.taboo4');

var myTabooCard;
var cardSelected = false;

// Show each room user in the room user table
function outputRoomUserTable(GameState) {
    // Clear the outdated table
    roomUserTable.innerHTML = '';
    
    // Build a table row for each user in the room
	GameState.users.forEach(user=>{
	const tr = document.createElement('tr');
	tr.classList.add('table-light');
    
    // Indicate who is the current card czar
	const th = document.createElement('th');
	th.setAttribute("scope","row");
	if(user.username == GameState.cardCzar.username) {
		th.innerHTML = `<i class="fas fa-gavel"></i>`;
	} else {
		th.innerHTML = ``;
	}
    tr.appendChild(th);
    
	//  Append username and point data to the table row
	const tdName = document.createElement('td');
	if(user.status == 'active') {
		tdName.style.color = "black";
		tdName.innerHTML = `${user.username}`;
	} else if(user.status == 'idle'){
		tdName.style.color = "red";
		tdName.innerHTML = `${user.username} (busy)`;
	} else {
		tdName.style.color = "red";
		tdName.innerHTML = `${user.username} (offline)`;		
	}
	tr.appendChild(tdName);
	const tdPoints = document.createElement('td');
	tdPoints.innerHTML = `${user.points}`;
	tr.appendChild(tdPoints);

    //  Append table row to the userlist table
	document.querySelector('.userlist-table').appendChild(tr);
	});  
}

// Output message to DOM
/*function outputMessage(message) {
	const div = document.createElement('div');
	if(message.username == getClientUsername()) {
		div.classList.add('mine');
	} else {
		div.classList.add('yours');
		div.style.fontSize = "small";
		div.innerHTML =`${message.username}`;
	}

	div.classList.add('messages');
	
	const div1 = document.createElement('div');
	div1.classList.add("message");
	div1.classList.add('last');
	
	div1.style.fontSize = "medium";
	//message.time not used
	div1.innerHTML = `<p>${message.text}</p>`;
	div.appendChild(div1);
	document.querySelector('.chat-messages').appendChild(div);
}
*/
/////////////////////////////////////////////////////////////////////////////////////////

// Add black card to DOM
function outputTabooCard(GameState) {
	card = GameState.blackCard;
	guessWord.innerHTML = ``;
	taboo0.innerHTML = ``;
	taboo1.innerHTML = ``;
	taboo2.innerHTML = ``;
	taboo3.innerHTML = ``;
	taboo4.innerHTML = ``;

	if(GameState.blackCard != false) {
		var tabooCard = card.split(",");
			//if(!cardSelected) {
				// if card is not selected do not show a card
			//} else {
				if(tabooCard[1] == "GREEN") {
					cardColor.src = "img_cardbackground_green.PNG";
				} else {
					cardColor.src = "img_cardbackground_purple.PNG";
				}
				guessWord.innerHTML = `${tabooCard[2]}`;
				taboo0.innerHTML = `${tabooCard[3]}`;
				taboo1.innerHTML = `${tabooCard[4]}`;
				taboo2.innerHTML = `${tabooCard[5]}`;
				taboo3.innerHTML = `${tabooCard[6]}`;
				taboo4.innerHTML = `${tabooCard[7]}`;
			//}
	}
}
function passCard() {
	drawBlackCard();
  }