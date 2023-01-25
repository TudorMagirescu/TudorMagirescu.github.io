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
    showValidationInformation(property, "Looks Good!", true);
    return true;
}

function showValidationInformation(property, text, isValid) {

    let pElement = document.createElement("p");
    let signUpDiv = document.getElementById("sign-up-" + property + "-div");
  
    if(signUpDiv.lastChild.tagName === 'P')
        signUpDiv.removeChild(signUpDiv.lastChild);

    pElement.style.fontSize = "16px";
    if(isValid) {
        pElement.style.color = "green";
        document.getElementById("sign-up-" + property + "-input").style.borderColor = "green";
    }
        
    else {
        pElement.style.color = "red";
        document.getElementById("sign-up-" + property + "-input").style.borderColor = "red";
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