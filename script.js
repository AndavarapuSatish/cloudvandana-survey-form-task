    document.getElementById("surveyForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;
        const genderCheckboxes = document.querySelectorAll(".gender-checkbox");
        const gender = Array.from(genderCheckboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.labels[0].textContent).join(", ");
        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        const popupText = `
            First Name: ${firstName}
            Last Name: ${lastName}
            Date of Birth: ${dob}
            Country: ${country}
            Gender: ${gender}
            Profession: ${profession}
            Email: ${email}
            Mobile Number: ${mobile}
        `;

        document.getElementById("popupText").textContent = popupText;
        document.getElementById("popup").style.display = "block";
    });

    document.getElementById("closePopup").addEventListener("click", function() {
        document.getElementById("popup").style.display = "none";
        document.getElementById("surveyForm").reset();
    });
