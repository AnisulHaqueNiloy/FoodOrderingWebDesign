document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Perform any backend submission here (e.g., AJAX)

    // Show the toast message
    document.getElementById("toastMessage").style.display = "block";

    // Reset the form after submission
    document.getElementById("newsletterForm").reset();

    // Hide the toast message after 3 seconds
    setTimeout(function() {
        document.getElementById("toastMessage").style.display = "none";
    }, 3000);
});