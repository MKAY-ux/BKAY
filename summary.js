document.addEventListener("DOMContentLoaded", function() {
    // Assume these are passed from the previous steps


     const studentId = localStorage.getItem("studentId");
     
    const hallName = "Autonomy Hall"; // Example: Replace with actual hall name
    const roomNo = "A1"; // Example: Replace with actual room number

    // Generate the Reference Number
    const refNo = hallName.substring(0, 2).toUpperCase() + studentId.slice(-4);

    // Get current date and time
    const now = new Date();
    const dateBooked = now.toLocaleString();

    // Populate the fields
    document.getElementById("refNo").value = refNo;
    document.getElementById("studentId").value = studentId;
    document.getElementById("residence").value = hallName;
    document.getElementById("roomNo").value = roomNo;
    document.getElementById("dateBooked").value = dateBooked;

    // Clear Button Functionality
    document.getElementById("clearBtn").addEventListener("click", function() {
        document.getElementById("refNo").value = "";
        document.getElementById("studentId").value = "";
        document.getElementById("residence").value = "";
        document.getElementById("roomNo").value = "";
        document.getElementById("dateBooked").value = "";
    });
});

function goToPreviousPage() {
    window.location.href = "residential.html"; // Replace with actual previous page URL
}

function finishBooking() {
    alert("Booking completed successfully!");
    window.location.href = "final-page.html"; // Replace with the actual final page or dashboard URL
}
