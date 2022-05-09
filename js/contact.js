function printAnswers() {
    const form = document.getElementById("signup");
    const form_container = document.getElementById("form-container");

    const small_names = document.getElementsByTagName("small");

    coherent_answers = true;

    let interpret = function(n) {
        if (n == 0) {
            let fname = form[n].value;
            let lname = form[n+1].value;

            if (fname.length > 0 && lname.length > 0) {
                let textElement = document.createElement("p");
                textElement.innerHTML = "Bonjour " + fname + " " + lname + " et merci de vous être inscrit."
                form_container.appendChild(textElement);
            } else {
                small_names[n].innerHTML = "Noms ou prénoms non remplis";
                coherent_answers = false;
            }
        } else if (n == 2 && coherent_answers) {
            let phone_number = form[n].value;
            if (phone_number.length > 0) {
                let textElement = document.createElement("p");
                textElement.innerHTML = "Votre numéro de téléphone est " + phone_number;
                form_container.appendChild(textElement);
            } else {
                small_names[n].innerHTML = "Numéro de téléphone non rempli";
                coherent_answers = false;
            }
        } else if (n == 3 && coherent_answers) {
            let email_address = form[n].value;
            let textElement = document.createElement("p");
            textElement.innerHTML = "Votre addresse électronique est " + email_address;
            form_container.appendChild(textElement);
        } else if (n == 4 && coherent_answers) {
            let birth_date = form[n].value;
            let textElement = document.createElement("p");
            textElement.innerHTML = "Votre date de naissance est " + birth_date;
            form_container.appendChild(textElement);
        } else if (n == 5 && coherent_answers) {
            let password = form[n].value;
            let password_confirmation = form[n+1].value;

            if (password == password_confirmation) {
                let textElement = document.createElement("p");
                textElement.innerHTML = "Votre mot de passe est " + password;
                form_container.appendChild(textElement);
            } else {
                small_names[n].innerHTML = "Confirmation du mot de passe incorrecte";
                coherent_answers = false;
            }

            if (password.length == 0 || password_confirmation.length == 0) {
                small_names[n].innerHTML = "Mot de passe non remplis";
                coherent_answers = false;
            }
        } else if (n == 7 && coherent_answers) {
            let textElement = document.createElement("p");
            textElement.innerHTML = "Vous êtes un " + form[n].value;
            form_container.appendChild(textElement);
        } else {
            let country = document.getElementById("country");
            let textElement = document.createElement("p");
            textElement.innerHTML = "Vous habitez " + country.options[country.selectedIndex].value;
            form_container.appendChild(textElement);
        }
    }

    interpret(0);
    interpret(1);
    interpret(2);
    interpret(3);
    interpret(4);
    interpret(5);
    interpret(6);

    if (coherent_answers == true) {
        form.remove();
    }
}
