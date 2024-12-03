let email = document.getElementById("email");
let password = document.getElementById("password");
let name = document.getElementById("name");
let form = document.getElementById("signup_form");

// This function will validates the input field of a form
function validate_field (field){
    var is_valid = false;
    var field_desc_id = field.getAttribute("aria-describedby");
    var desc_field = document.getElementById(field_desc_id);
    
    // Setting the default text to attribute of a inputfield
    desc_field.setAttribute("label_text",desc_field.innerHTML);

    if(field.value==""){// Display the input box in red color if nothing was added //
        desc_field.innerHTML = "This field is required";
        desc_field.classList.add("text-danger");
        field.classList.add("border-danger");
    }else{// The input is valid if user had put some values in it
        is_valid = true;
    }

    // removing the warning classlist if user inputs into the field //
    field.addEventListener("input",(e)=>{
        if(e.target.value != ""){
            desc_field.innerHTML = desc_field.getAttribute("label_text");
            desc_field.classList.remove("text-danger");
            field.classList.remove("border-danger");
            is_valid = true;
        }
    });

    return is_valid;
}

// event listener for form submission
form.addEventListener("submit",(e)=>{
    e.preventDefault(); // Prevent the default behaviour when form is submitted //
    let email_validation = validate_field(email);
    let password_validation = validate_field(password);
    let name_validation = validate_field(name);
    if(email_validation == true || password_validation == true){
        alert("You are good to go");
    }
});