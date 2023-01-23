document.getElementById("sign-up-form").onsubmit = () => {
    let details = {
        username: document.getElementById("username-sign-up").value,
        password: document.getElementById("password-sign-up").value,
        name: document.getElementById("name").value,
        address: document.getElementById("address").value,
        country: document.getElementById("country").value,
        zip: document.getElementById("zip").value,
        email: document.getElementById("email").value,
        gender: document.getElementById("gender").value,
        language: document.getElementById("language").value,
        bio: document.getElementById("bio").value
    };
    let output = "";
    for (property in details)
        output += property + ": " + details[property] + "\n";
    alert(output);
};