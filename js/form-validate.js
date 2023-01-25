document.getElementById("sign-up-button").onclick = function (event) {

    event.preventDefault();
    details = createDetailsObject();

    let correctFields = 0;
    const fieldCount = 10;

    for (let property in details)
        if (typeof details[property] !== 'function')
            correctFields += validate(details, property);

    console.log(correctFields);

    if (correctFields == fieldCount) {
        alert(details.toString());
        displayTracking();
    }
};

function validate(details, property) {
    console.log("dsf");

    switch (property) {

        case "username":

            if (details[property] === '') {
                showValidationInformation(property, "Field is required!", false);
                return false;
            }

            if (details[property].length < 5) {
                console.log("here");
                showValidationInformation(property, "Field must have length at least 5!", false);
                return false;
            }

            if (details[property].length > 12) {
                showValidationInformation(property, "Field must have length at most 12!", false);
                return false;
            }

            if (!(details[property].charAt(0) >= 'A' && details[property].charAt(0) <= 'Z')) {
                showValidationInformation(property, "Field must start with a capital letter.", false);
                return false;
            }

            // check last character
            let ch = details[property].charAt(details[property].length - 1);
            if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) {
                showValidationInformation(property, "Field must end with a special character.", false);
                return false;
            }

            showValidationInformation(property, "Looks good!", true);
            return true;

        case "password":

            if (details[property] === '') {
                showValidationInformation(property, "Field is required!", false);
                return false;
            }

            if (details[property].length < 12) {
                showValidationInformation(property, "Field must have length at least 12!", false);
                return false;
            }

            let upperCase = false, lowerCase = false, number = false, symbol = false;
            for (let i = 0; i < details[property].length; i++) {
                let ch = details[property].charAt(i);
                if (ch >= 'A' && ch <= 'Z')
                    upperCase = true;
                if (ch >= 'a' && ch <= 'z')
                    lowerCase = true;
                if (ch >= '0' && ch <= '9')
                    number = true;
                if (!((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9')))
                    symbol = true;
            }

            if (upperCase == false) {
                showValidationInformation(property, "Field must have uppercase letters", false);
                return false;
            }

            if (lowerCase == false) {
                showValidationInformation(property, "Field must have lowercase letters", false);
                return false;
            }

            if (number == false) {
                showValidationInformation(property, "Field must have numbers", false);
                return false;
            }

            if (symbol == false) {
                showValidationInformation(property, "Field must have symbols", false);
                return false;
            }


            showValidationInformation(property, "Looks good!", true);
            return true;

        case "name":

            if (details[property] === '') {
                showValidationInformation(property, "Field is required!", false);
                return false;
            }

            let ok = true;
            for (let i = 0; i < details[property].length; i++) {
                let ch = details[property].charAt(i);
                if (!((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || ch == ' ')) {
                    ok = false;
                }

                if (ok == false) {
                    showValidationInformation(property, "Field must contain the alphabet only", false);
                    return false;
                }
            }

            showValidationInformation(property, "Looks good!", true);
            return true;

        case "address":
        case "bio":

            showValidationInformation(property, "Looks good!", true);
            return true;

        case "country":
        case "gender":
        case "language":

            if (details[property] === '') {
                showValidationInformation(property, "Field is required!", false);
                return false;
            }

            showValidationInformation(property, "Looks good!", true);
            return true;

        case "zip":

            if (details[property] === '') {
                showValidationInformation(property, "Field is required!", false);
                return false;
            }

            if (details[property].length != 6) {
                showValidationInformation(property, "Field must have a 6-digit structure", false);
                return false;
            }

            let numbers = true;
            for (let i = 0; i < 4; i++) {
                let ch = details[property].charAt(i);
                if (!(ch >= '0' && ch <= '9'))
                    numbers = false;
            }

            if (numbers == false) {
                showValidationInformation(property, "Field must have numbers in the first 4 characters", false);
                return false;
            }

            let letters = true;
            for (let i = 4; i < 6; i++) {
                let ch = details[property].charAt(i);
                if (!((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')))
                    letters = false;
            }

            if (letters == false) {
                showValidationInformation(property, "Field must have letters in the last 2 characters", false);
                return false;
            }

            showValidationInformation(property, "Looks good!", true);
            return true;

        case "email":

            if (details[property] === '') {
                showValidationInformation(property, "Field is required!", false);
                return false;
            }

            let position = null, cnt = 0;
            for (let i = 0; i < details[property].length; i++) {
                if (details[property].charAt(i) == '@') {
                    position = i;
                    cnt++;
                }
            }

            if (position == null || cnt != 1) {
                showValidationInformation(property, "Invalid email", false);
                return false;
            }
            
            cnt = 0;
            for (let i = position + 1; i < details[property].length-1; i++){
                if (details[property].charAt(i) == '.')
                    cnt++;
            }

            if (cnt == 0) {
                showValidationInformation(property, "Invalid email", false);
                return false;
            }


            showValidationInformation(property, "Looks good!", true);
            return true;

        default:
            showValidationInformation(property, "Does not Look Good!", false);
            return false;
    }
}

function showValidationInformation(property, text, isValid) {

    let pElement = document.createElement("p");
    let signUpDiv = document.getElementById("sign-up-" + property + "-div");

    if (signUpDiv.lastChild.tagName === 'P')
        signUpDiv.removeChild(signUpDiv.lastChild);

    let crossTickSpan = document.getElementById(property + "-cross-tick");
    crossTickSpan.innerHTML = '';

    pElement.style.fontSize = "13px";
    if (isValid) {
        pElement.style.color = "green";
        document.getElementById("sign-up-" + property + "-input").style.borderColor = "green";

        crossTickSpan.style.fontSize = "12px";
        crossTickSpan.style.color = "rgb(0, 180, 0)";
        crossTickSpan.appendChild(document.createTextNode("✔"));
    }

    else {
        pElement.style.color = "red";
        document.getElementById("sign-up-" + property + "-input").style.borderColor = "red";

        crossTickSpan.style.fontSize = "12px";
        crossTickSpan.style.color = "red";
        crossTickSpan.appendChild(document.createTextNode("✖"));
    }

    pElement.appendChild(document.createTextNode(text));

    signUpDiv.appendChild(pElement);
}

function createDetailsObject() {

    let details = {
        username: document.getElementById("sign-up-username-input").value,
        password: document.getElementById("sign-up-password-input").value,
        name: document.getElementById("sign-up-name-input").value,
        address: document.getElementById("sign-up-address-input").value,
        country: document.getElementById("sign-up-country-input").value,
        zip: document.getElementById("sign-up-zip-input").value,
        email: document.getElementById("sign-up-email-input").value,
        gender: document.getElementById("sign-up-gender-input").value,
        language: document.getElementById("sign-up-language-input").value,
        bio: document.getElementById("sign-up-bio-input").value,
        toString: function () {
            let output = "";
            for (property in details)
                if (typeof this[property] !== 'function')
                    output += property + ": " + details[property] + "\n";
            return output;
        }
    };

    return details;
}