document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.querySelector(".progress-bar");
    const steps = document.querySelectorAll(".step");
    const status = document.querySelector(".status");
    
    let progress = 0;
    let stepIndex = 0;

    function updateProgress() {
        if (progress < 100) {
            progress += 33; // Adjust the percentage for smooth progress
            progressBar.style.width = progress + "%";

            steps[stepIndex].classList.add("active");

            // Update the status text dynamically
            if (stepIndex === steps.length - 0) {
                status.textContent = "Out for Delivery";
                status.style.background = "rgba(0, 0, 255, 0.2)";
                status.style.color = "blue";
            } else if (stepIndex === 1) {
                status.textContent = "In Transit";
                status.style.background = "rgba(255, 166, 0, 0.2)";
                status.style.color = "orange";
            } else if (stepIndex === 2) {
                status.textContent = "Delivered";
                status.style.background = "rgba(0, 255, 0, 0.2)";
                status.style.color = "green";
            }

            stepIndex++;
            setTimeout(updateProgress, 2000); // Adjust speed here
        }
    }

    updateProgress();
});



document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;
    
    function showError(id, message) {
        document.getElementById(id).innerText = message;
    }
    function clearError(id) {
        document.getElementById(id).innerText = "";
    }
    
    const name = document.getElementById("name").value.trim();
    if (name === "") {
        showError("nameError", "Full Name is required");
        isValid = false;
    } else {
        clearError("nameError");
    }

    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError("emailError", "Invalid email format");
        isValid = false;
    } else {
        clearError("emailError");
    }

    const phone = document.getElementById("phone").value.trim();
    if (!/^[0-9]+$/.test(phone)) {
        showError("phoneError", "Phone number must contain only digits");
        isValid = false;
    } else {
        clearError("phoneError");
    }
    
    const message = document.getElementById("message").value.trim();
    if (message === "") {
        showError("messageError", "Message cannot be empty");
        isValid = false;
    } else {
        clearError("messageError");
    }
    
    const service = document.getElementById("service").value;
    if (service === "") {
        showError("serviceError", "Please select a service");
        isValid = false;
    } else {
        clearError("serviceError");
    }

    if (isValid) {
        document.getElementById("successModal").style.display = "flex";
        document.getElementById("bookingForm").reset();
    }
});

function closeModal() {
    document.getElementById("successModal").style.display = "none";
}


const menuIcon = document.getElementById("menuIcon");
const menuPath = document.getElementById("menuPath");
const dropdownMenu = document.getElementById("topmenu");

const hamburgerD = "M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z";
const closeD = "M 10 10 L 40 40 M 40 10 L 10 40"; // X shape

menuIcon.addEventListener("click", () => {
    dropdownMenu.classList.toggle("active");
    
    if (menuPath.getAttribute("d") === hamburgerD) {
        menuPath.setAttribute("d", closeD);
    } else {
        menuPath.setAttribute("d", hamburgerD);
    }
});