document.getElementById("formStep3").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from submitting normally

            const hall = document.getElementById("hall").value;

            if (hall === "Autonomy Hall") {
                window.location.href = "booking.html";
            }
            if (hall === "Atwima Hall") {
                window.location.href = "atwima.html";
            }
            else if (hall === "Opoku Ware II Hall") {
                window.location.href = "opokuware.html";
            }
            // Add more conditions for other halls as needed
        });