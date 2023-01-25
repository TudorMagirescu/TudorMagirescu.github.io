document.getElementById("sign-up-button").onclick = function(event) {

    event.preventDefault();
    details = createDetailsObject();

    let correctFields = 0;
    const fieldCount = 10;

    for(let property in details)
        if(typeof details[property] !== 'function')
            correctFields += validate(details, property);

    console.log(correctFields);

    if(correctFields == fieldCount)
        alert(details.toString());
};

function validate(details, property) {

    switch(property) {

        case "username":

            if(details[property] === '') {
                showValidationInformation(property, "Field is required!", false);
                return false;
            }

            if(details[property].length < 5) {
                console.log("here");
                showValidationInformation(property, "Field must have length at least 5!", false);
                return false;
            }

            if(details[property].length > 12) {
                showValidationInformation(property, "Field must have length at most 12!", false);
                return false;
            }

            //additional checks with regex

            showValidationInformation(property, "Looks good!", true);
            return true;

        case "password":

            if(details[property] === '') {
                showValidationInformation(property, "Field is required!", false);
                return false;
            }

            if(details[property].length < 12) {
                showValidationInformation(property, "Field must have length at least 12!", false);
                return false;
            }

            //additional checks with regex

            showValidationInformation(property, "Looks good!", true);
            return true;

        case "name":

            if(details[property] === '') {
                showValidationInformation(property, "Field is required!", false);
                return false;
            }

            //additional checks with regex

            showValidationInformation(property, "Looks good!", true);
            return true;

        case "address":
        case "bio":

            showValidationInformation(property, "Looks good!", true);
            return true;

        case "country":
        case "gender":
        case "language":

            if(details[property] === '') {
                showValidationInformation(property, "Field is required!", false);
                return false;
            }

            showValidationInformation(property, "Looks good!", true);
            return true;

        case "zip":

            if(details[property] === '') {
                showValidationInformation(property, "Field is required!", false);
                return false;
            }

            //additional checks with regex

            showValidationInformation(property, "Looks good!", true);
            return true;

        case "email":

            if(details[property] === '') {
                showValidationInformation(property, "Field is required!", false);
                return false;
            }

            //additional checks with regex

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

    if(signUpDiv.lastChild.tagName === 'P')
        signUpDiv.removeChild(signUpDiv.lastChild);
    
    let crossTickSpan = document.getElementById(property + "-cross-tick");
    crossTickSpan.innerHTML = '';

    pElement.style.fontSize = "13px";
    if(isValid) {
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
        toString: function() {
            let output = "";
            for(property in details)
                if(typeof this[property] !== 'function')
                    output += property + ": " + details[property] + "\n";
            return output;
        }
    };

    return details;
}