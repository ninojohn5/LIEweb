document.getElementById("logoutBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default action

    // Show the splash screen
    document.querySelector(".se-pre-con").style.display = "block";

    // After a delay, fade out the splash screen and redirect to sign-in page
    setTimeout(function() {
        document.querySelector(".se-pre-con").style.display = "none"; // Optionally hide splash screen before redirect
        window.location.href = "screen.html"; // Redirect to the sign-in page
    }, 1000); // Adjust the delay (1000ms = 1 second) as needed
});