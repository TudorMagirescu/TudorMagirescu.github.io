let numberOfClicks = 0;
let keysPressed = 0;
let charactersTyped = 0;
var todayStart, hourStart, minuteStart, secondStart;

document.addEventListener("click", function () {
    numberOfClicks++;
});


// Keys pressed + characters typed
let keysEvent = document.querySelectorAll("#sign-up-username-input, #sign-up-password-input, #sign-up-name-input, #sign-up-ddress-input, #sign-up-country-input, #sign-up-zip-input, #sign-up-email-input, #sign-up-language-input, #sign-up-bio-input");

for (let i = 0; i < keysEvent.length; i++) {
    keysEvent[i].addEventListener("keydown", function (e) {
        keysPressed++;
        console.log(e.key);

        //check if the key pressed is a letter
        let c = e.key.charAt(0);
        if (e.key.length == 1)
            charactersTyped++;
    });
}


// Display the information 
function displayTracking() {

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    var time = (today - todayStart) / 1000;

    let clicksMessage = "Number of clicks is: " + numberOfClicks.toString();
    let timeMessage = "Total time spent: " + time + " seconds";
    let keysPressedMessage = "Number of keys pressed: " + keysPressed;
    let charactersTypedMessage = "Number of characters typed: " + charactersTyped;

    document.getElementById("div-keys-id").innerHTML = clicksMessage + "<br>\n" + timeMessage + "<br>\n" + keysPressedMessage + "<br>\n" + charactersTypedMessage;


    numberOfClicks = 0;
    keysPressed = 0;
    charactersTyped = 0;
    console.log(document.getElementById("div-keys-id").innerHTML);
}

function startTime() {
    todayStart = new Date();
    hourStart = todayStart.getHours();
    minuteStart = todayStart.getMinutes();
    secondStart = todayStart.getSeconds();
}
