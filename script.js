document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", function() {
        const baseSalary = document.getElementById("baseSalary").value;
        const bonus = document.getElementById("bonus").value;
        const tax = document.getElementById("tax").value;
        const netSalary = baseSalary + bonus - tax;
        document.getElementById("netSalary").value = netSalary;
    });

    const formSubmittedButton = document.getElementById("FormedSubmiited");
    formSubmittedButton.addEventListener("click", function(e) {
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const middlename = document.getElementById('middlename').value;

        if (firstname === '' || lastname === '' || middlename === '') {
            alert("Input field is required");
        } else {
            alert("Form has been successfully submitted");
        }
        e.preventDefault();
    });

    const emailInput = document.getElementById('email');
    emailInput.addEventListener('blur', function() {
        const email = emailInput.value;
        if (email === "abc@gmail.com") {
            alert("Email is not valid");
        } else {
            alert("Email is valid");
        }
    });
});
