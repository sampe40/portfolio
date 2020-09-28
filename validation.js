$(document).ready(function () {
    $("form").on('keyup change paste', 'input, select, textarea', function () {
        var field = $(this).attr('id');
        var value = $(this).val();
        validate(field, value);
    });
});

function validate(field, value) {
    switch (field) {
        case "name":
            validateName(value);
            break;
        case "email":
            validateEmail(value);
            break;
        case "phone":
            validatePhone(value);
            break;
        case "message":
            validateMessage(value);
            break;

    }
}

function validateName(value) {
    if (isEmpty(value)) {
        $("#name-help").text("Namn får inte vara tomt");
    } else if (isTooShort(value)) {
        $("#name-help").text("Namnet måste vara längre än tre tecken");
    } else {
        $("#name-help").text("");
    }
};

function validateEmail(value) {
    if (isEmpty(value)) {
        $("#email-help").text("Email får inte vara tomt");
    } else if (!isEmail(value)) {
        $("#email-help").text("Måste vara en korrekt mailadress");
    } else {
        $("#email-help").text("");
    }
};

function validatePhone(value) {
    if (isEmpty(value)) {
        $("#phone-help").text("Telefonnumret får inte vara tomt");
    } else if (!isOnlyNumbers(value)) {
        $("#phone-help").text("Måste vara ett korrekt telefonnummer");
    } else {
        $("#phone-help").text("");
    }
};

function validateMessage(value) {
    if (isEmpty(value)) {
        $("#message-help").text("Meddelandet får inte vara tomt");
    } else {
        $("#message-help").text("");
    }
};

function isEmpty(value) {
    return value.match(/^\s*$/);
}

function isTooShort(value) {
    return value.match(/^\w{1,3}$/);

}

function isOnlyNumbers(value){
    return value.match(/^[0-9]*$/); 
}

function isEmail(value) {
    return value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}