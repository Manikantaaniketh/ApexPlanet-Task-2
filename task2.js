  document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault();
      let isValid = true;

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();

      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("emailError");

      nameError.textContent = "";
      emailError.textContent = "";

      if (name === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
      }
      const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if (email === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
      } else if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
      }

      if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset();
      }
    });

    // ---------- To-Do List ----------
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function() {
      const taskText = taskInput.value.trim();
      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }

      const li = document.createElement("li");
      li.textContent = taskText;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Remove";
      deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
      });

      li.appendChild(deleteBtn);
      taskList.appendChild(li);
      taskInput.value = "";
    });