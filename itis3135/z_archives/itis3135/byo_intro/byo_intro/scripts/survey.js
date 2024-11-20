document.getElementById("intro-form").addEventListener("submit", function(event) {
    event.preventDefault();
    submitForm();
});

document.getElementById("add-course-button").addEventListener("click", addCourse);

function addCourse() {
    const courseContainer = document.getElementById("course-container");
    const courseInput = document.createElement("input");
    courseInput.type = "text";
    courseInput.name = "courses[]";
    courseInput.required = true;
    courseContainer.appendChild(courseInput);

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        courseContainer.removeChild(courseInput);
        courseContainer.removeChild(deleteButton);
    };
    courseContainer.appendChild(deleteButton);
}

function resetForm() {
    document.getElementById("intro-form").reset();
}

function submitForm() {
    const form = document.getElementById("intro-form");
    const submittedData = document.getElementById("submitted-data");
    submittedData.innerHTML = "";

    const formData = new FormData(form);
    formData.forEach((value, key) => {
        const p = document.createElement("p");
        p.textContent = `${key}: ${value}`;
        submittedData.appendChild(p);
    });

    form.style.display = "none";
    submittedData.style.display = "block";

    const resetLink = document.createElement("button");
    resetLink.textContent = "Reset";
    resetLink.onclick = function() {
        submittedData.style.display = "none";
        form.style.display = "block";
        resetForm();
    };
    submittedData.appendChild(resetLink);
}
