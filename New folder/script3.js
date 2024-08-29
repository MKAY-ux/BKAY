function storeStudentID() {
    // Get the student ID entered by the user
    const studentId = document.getElementById("studentId").value;

    // Store the student ID in localStorage
    localStorage.setItem("studentId", studentId);
}