function onSubmit() {
    let nom = document.forms["myform"]["nom"].value;
    let prenom = document.forms["myform"]["prenom"].value;
    let date = document.forms["myform"]["date"].value;
    let num = document.forms["myform"]["num"].value;
    let nump = document.forms["myform"]["nump"].value;
    let numm = document.forms["myform"]["numm"].value;
    let gender = document.forms["myform"]["gender"].value;
    let cin = document.forms["myform"]["cin"].value;
    let masar = document.forms["myform"]["masar"].value;
    let email = document.forms["myform"]["email"].value;
    let classe = document.forms["myform"]["classe"].value;

    if (nom === "") {
        alert("Le nom est requis.");
        return false;
    }
    
    if (prenom === "") {
        alert("Le prénom est requis.");
        return false;
    }

    if (date === "" || !isValidDate(date)) {
        alert("Date non valide (format attendu : YYYY-MM-DD).");
        return false;
    }

    if (gender === "") {
        alert("Le genre est requis.");
        return false;
    }

    if (classe === "") {
        alert("La classe est requise.");
        return false;
    }

    if (email === "" || !isValidEmail(email)) {
        alert("Email non valide.");
        return false;
    }

    if (num === "" || !isValidPhoneNumber(num)) {
        alert("Numéro de téléphone non valide (10 chiffres attendus).");
        return false;
    }

    if (nump === "" || !isValidPhoneNumber(nump)) {
        alert("Numéro de portable non valide (10 chiffres attendus).");
        return false;
    }

    if (numm === "" || !isValidPhoneNumber(numm)) {
        alert("Numéro mobile non valide (10 chiffres attendus).");
        return false;
    }

    if (cin === "") {
        alert("Le numéro de CIN est requis.");
        return false;
    }

    if (masar === "") {
        alert("Le numéro de masar est requis.");
        return false;
    }

    return true;
}

function isValidDate(date) {
    const pattern = /^\d{4}-\d{2}-\d{2}$/;
    return pattern.test(date);
}

function isValidEmail(email) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}

function isValidPhoneNumber(phoneNumber) {
    const pattern = /^\d{10}$/;
    return pattern.test(phoneNumber);
}

