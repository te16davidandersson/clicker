//Element 
var button = document.getElementById("clickerbutton");
var ump45Knapp = document.getElementById("powerump45");
var ak47Knapp = document.getElementById("powerak47");
var karambitKnapp = document.getElementById("powerKarambit");
var m9Knapp = document.getElementById("powerM9");
var gloveKnapp = document.getElementById("powerGlove");
var scoreDiv = document.getElementById("score");
var powerText = document.getElementById("powerText");
var scoreText = document.createElement("p");

//Variabler
var clickValue = 1;
var bank = 0;
var umpCost = 15;
var ak47Cost = 20;
var karambitCost = 30;
var m9Cost = 500;
var gloveCost = 10000;
var umpClicks = 0;
var ak47Clicks = 0;
var karambit = null;
var karambitTimer = 0;
var karambitGains = 5;
var m9 = null;
var m9Timer = 0;
var m9Gains = 150;
var glove = null;
var gloveTimer = 0;
var gloveGains = 1500;

//Start
scoreText.textContent = "Money: 0$";
ump45Knapp.textContent = "UMP-45: " + Math.floor(umpCost) + "$";
ak47Knapp.textContent = "AK47: " + Math.floor(ak47Cost) + "$";
karambitKnapp.textContent = "Karambit: " + Math.floor(karambitCost) + "$";
m9Knapp.textContent = "M9 Bayonet: " + Math.floor(m9Cost) + "$";
gloveKnapp.textContent = "Gloves: " + Math.floor(gloveCost) + "$";

button.addEventListener("click", function() {
	if (umpClicks > 0 && ak47Clicks > 0) {         //så att om man köper flera powerups så adderas antalet clicks istället för att man får skyhög clickvalue.
		umpClicks--;
		ak47Clicks--;
	} else if (umpClicks > 0 && ak47Clicks == 0) {
		umpClicks--;
	} else if (ak47Clicks > 0 && umpClicks == 0) {
		ak47Clicks--;
	} else if (umpClicks == 0 && ak47Clicks == 0) {
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
		umpCost += 5;
			
		} else {
		powerText.textContent = "Köpte UMP-45";
		clickValue *=2;
		umpClicks +=25;
		bank -= umpCost;
		umpCost +=5;
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

powerak47.addEventListener("click", function() {
	if(bank >= ak47Cost) {

		if (ak47Clicks > 0){
		ak47Clicks += 30;
		bank -= ak47Cost;
		ak47Cost += 8;
			
		} else {
		powerText.textContent = "Köpte AK47";
		clickValue *=4;
		ak47Clicks +=30;
		bank -= ak47Cost;
		ak47Cost +=8;
		}

		ak47Knapp.textContent = "AK47: " + Math.floor(ak47Cost) + "$";
		powerText.textContent = "Köpte AK47";
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

		karambitKnapp.textContent = "Karambit: " + Math.floor(karambitCost) + "$";
		powerText.textContent = "Köpte karambit";
		scoreText.textContent = "Money: " + Math.floor(bank) + "$";
		}, 1000);
	}
	else if (bank < karambitCost){
		powerText.textContent = "Du har inte råd";
	} else {
		powerText.textContent = "Du kan endast ha en Karambit åt gången!";
	}
}, true);

scoreDiv.appendChild(scoreText);

powerM9.addEventListener("click", function() {
	if (bank >= m9Cost && m9Timer <= 0) {
		bank -= m9Cost;
		m9Cost +=200;
		m9Gains +=10;


		m9Timer += 10;			
		m9 = setInterval(function(){
			bank +=m9Gains;
			scoreText.textContent = "Money: " + Math.floor(bank) + "$";
			m9Timer--;

			if(m9Timer == 0) {
				powerText.textContent = "Slut";
				clearInterval(m9);
			}

		m9Knapp.textContent = "M9 Bayonet: " + Math.floor(m9Cost) + "$";
		powerText.textContent = "Köpte M9 Bayonet";
		scoreText.textContent = "Money: " + Math.floor(bank) + "$";
		}, 1000);
	}
	else if (bank < m9Cost){
		powerText.textContent = "Du har inte råd";
	} else {
		powerText.textContent = "Du kan endast ha en M9 Bayonet åt gången!";
	}
}, true);

scoreDiv.appendChild(scoreText);

powerGlove.addEventListener("click", function() {
	if (bank >= gloveCost && gloveTimer <= 0) {
		bank -= gloveCost;
		gloveCost +=2000;
		gloveGains +=350;


		gloveTimer += 10;			
		glove = setInterval(function(){
			bank +=gloveGains;
			scoreText.textContent = "Money: " + Math.floor(bank) + "$";
			gloveTimer--;

			if(gloveTimer == 0) {
				powerText.textContent = "Slut";
				clearInterval(glove);
			}

		gloveKnapp.textContent = "Gloves: " + Math.floor(gloveCost) + "$";
		powerText.textContent = "Köpte Gloves";
		scoreText.textContent = "Money: " + Math.floor(bank) + "$";
		}, 1000);
	}
	else if (bank < gloveCost){
		powerText.textContent = "Du har inte råd";
	} else {
		powerText.textContent = "Du kan endast ha ett par Gloves åt gången!";
	}
}, true);