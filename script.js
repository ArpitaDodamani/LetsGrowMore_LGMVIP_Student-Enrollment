function resetForm() {
    document.getElementById("enrollmentForm").reset();
    document.getElementById("studentData").innerHTML = "<h2>Enrolled Student Data</h2>";
}

document.getElementById("enrollmentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const studentData = {};
    formData.forEach((value, key) => {
        if (studentData[key]) {
            if (!Array.isArray(studentData[key])) {
                studentData[key] = [studentData[key]];
            }
            studentData[key].push(value);
        } else {
            studentData[key] = value;
        }
    });
    displayStudentData(studentData);
    // Reset form after submission if needed
    this.reset();
});

function displayStudentData(data) {
    const studentDataDiv = document.getElementById("studentData");
    studentDataDiv.innerHTML = "<h2>Enrolled Student Data</h2>";
    for (const [key, value] of Object.entries(data)) {
        if (Array.isArray(value)) {
            studentDataDiv.innerHTML += `<p><strong>${key}:</strong> ${value.join(", ")}</p>`;
        } else {
            studentDataDiv.innerHTML += `<p><strong>${key}:</strong> ${value}</p>`;
        }
    }
}