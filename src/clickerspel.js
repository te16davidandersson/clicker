//Element
	var button = document.getElementById("clickerbutton");
	var ump45Knapp = document.getElementById("powerump45");
	var karambitKnapp = document.getElementById("powerKarambit");
	var scoreDiv = document.getElementById("score");
	var powerText = document.getElementById("powerText");
	var scoreText = document.createElement("p");

	//Variabler
	var clickValue = 1;
	var bank = 0;
	var umpCost = 15;
	var karambitCost = 30;
	var umpClicks = 0;
	var karambit = null;
	var karambitTimer = 0;
	var karambitGains = 5;

	//Start
	scoreText.textContent = "Money: 0$";
	ump45Knapp.textContent = "UMP-45: " + Math.floor(umpCost) + "$";
	karambitKnapp.textContent = "Karambit: " + Math.floor(karambitCost) + "$";

	button.addEventListener("click", function() {
		if (umpClicks > 0) {
			umpClicks--;
		} else if (umpClicks == 0){
			clickValue = 1;
		}
		bank += clickValue; //lägg till värdet av clickValue till bank
		scoreText.textContent = "Money: " + Math.floor(bank) + "$"; //sätt textvärdet i p elementet till bank


	}, true);

	scoreDiv.appendChild(scoreText); //fäst p elementet i score diven

	powerump45.addEventListener("click", function() {
		if(bank >= umpCost) {

			if (umpClicks > 0){
			umpClicks += 25;
			bank -= umpCost;
			umpCost += 3;
			
			} else {
			powerText.textContent = "Köpte UMP-45";
			clickValue *=2;
			umpClicks +=25;
			bank -= umpCost;
			umpCost +=3;
			}

			ump45Knapp.textContent = "UMP-45: " + Math.floor(umpCost) + "$";
			powerText.textContent = "Köpte UMP-45";
			scoreText.textContent = "Money: " + Math.floor(bank) + "$";
		} 
		else {
			powerText.textContent = "Du har inte råd!";
		}
	}, true);

	scoreDiv.appendChild(scoreText);

	powerKarambit.addEventListener("click", function() {
		if (bank >= karambitCost && karambitTimer <= 0) {
			bank -= karambitCost;
			karambitCost +=5;
			karambitGains +=5;

			
			karambitTimer += 10;			
			karambit = setInterval(function(){
				bank +=karambitGains;
				scoreText.textContent = "Money: " + Math.floor(bank) + "$";
				karambitTimer--;

				if(karambitTimer == 0) {
					powerText.textContent = "Slut";
					clearInterval(karambit);
				}

			karambitKnapp.textContent = "karambit: " + Math.floor(karambitCost) + "$";
			powerText.textContent = "Köpte karambit";
			scoreText.textContent = "Money: " + Math.floor(bank) + "$";
			}, 1000);
		}
		else if (bank < karambitCost){
			console.log("Du har inte råd med en karambit!");
		} else {
			console.log("Du kan endast ha en karambit åt gången!");
		}
	}, true);