function submitForm() {
    const form = document.getElementById("signup");
    const form_container = document.getElementById("form-container")

    valid_answers = true;

    let names = ["lname", "fname", "phone_number", "email_address", "birth_date", "password", "password_confirmation", "genre", "country", "conditions"];
    names.forEach(function(name) {
        valid = true;

        let element = form[name].value;

        if (name == "password_confirmation") {
            let password = form["password"].value;

            if (password != element) {
                alert("Confirmation du mot de passe incorrecte")
                valid = false;
            }
        } else if (name == "conditions") {
            if (!form[name].checked) {
                alert("Vous n'avez pas accepte les conditions d'utilisation")
                valid = false;
            }
        }

        if (valid) {
            let textElement = document.createElement("p");
            switch (name) {
                case "lname":
                    let fname = form["fname"].value;
                    textElement.innerHTML = "Bonjour " + element + " " + fname + ".";
                    break;

                case "phone_number":
                    textElement.innerHTML = "Votre numero de telephonne est " + element;
                    break

                case "email_address":
                    textElement.innerHTML = "Votre addresse email est " + element;
                    break;
                
                case "birth_date":
                    textElement.innerHTML = "Votre date de naissance est " + element;
                    break

                case "password":
                    textElement.innerHTML = "Votre mot de passe est " + element;
                    break;

                case "genre":
                    textElement.innerHTML = "Vous etes " + element;
                    break;

                case "country":
                    textElement.innerHTML = "Vous vivez en " + element;
                    break;
            }
            form_container.appendChild(textElement);
        } else {
            valid_answers = false;
        }
    })

    if (valid_answers) {
        form.remove();
    }

    /*
    let interpret = function(n) {
        if (n == 0) {
            let fname = form[n].value;
            let lname = form[n+1].value;

            let textElement = document.createElement("p");
            textElement.innerHTML = "Bonjour " + fname + " " + lname + " et merci de vous être inscrit."
            form_container.appendChild(textElement);
        } else if (n == 2 && coherent_answers) {
            let phone_number = form[n].value;
            let textElement = document.createElement("p");
            textElement.innerHTML = "Votre numéro de téléphone est " + phone_number;
            form_container.appendChild(textElement);
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
            }

            if (password.length == 0 || password_confirmation.length == 0) {
                small_names[n].innerHTML = "Mot de passe non remplis";
                coherent_answers = false;
            }
        } else if (n == 7 && coherent_answers) {
            let textElement = document.createElement("p");
            textElement.innerHTML = "Vous êtes un " + form[n].value;
            form_container.appendChild(textElement);
        } else if (n == 10 && coherent_answers) {
            let country = document.getElementById("country");
            let textElement = document.createElement("p");
            textElement.innerHTML = "Vous habitez " + country.options[country.selectedIndex].value;
            form_container.appendChild(textElement);
        } else if (n == 11 && coherent_answers) {
            if (!form[n].checked) {
                coherent_answers = false;
            }
        }
    }

    interpret(0);
    interpret(1);
    interpret(2);
    interpret(3);
    interpret(4);
    interpret(5);
    interpret(6);
    interpret(7);
    interpret(8);
    interpret(9);
    interpret(10);

    console.log(coherent_answers);
    if (coherent_answers) {
        form.remove();
    }
    */
}
