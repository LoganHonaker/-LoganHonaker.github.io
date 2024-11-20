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
    document.getElementById("submitted-data").classList.add("hidden");
    document.getElementById("intro-form").style.display = "block";
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
    submittedData.classList.remove("hidden");

    const resetLink = document.createElement("button");
    resetLink.textContent = "Reset";
    resetLink.onclick = function() {
        resetForm();
    };
    submittedData.appendChild(resetLink);

    document.getElementById("intro-form").addEventListener("submit", function(event) {
        event.preventDefault();
        submitForm();
    });
    document.getElementById("add-course-button").addEventListener("click", addCourse);
    document.getElementById("reset-button").addEventListener("click", resetForm);
}
