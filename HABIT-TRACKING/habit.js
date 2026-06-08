let habits = [];

const form = document.getElementById("habitForm");
const errorMessage = document.getElementById("paragraph");


function validateForm(name, target, category) {

    if (name.trim().length < 3) {
        errorMessage.textContent =
            "Habit name must be at least 3 characters long.";
        return false;
    }

    if (!Number.isInteger(Number(target))) {
        errorMessage.textContent =
            "Target must be a whole number.";
        return false;
    }

    if (Number(target) < 1 || Number(target) > 7) {
        errorMessage.textContent =
            "Target must be between 1 and 7.";
        return false;
    }

    if (category === "") {
        errorMessage.textContent =
            "Please select a category.";
        return false;
    }

    errorMessage.textContent = "";
    return true;
}

function addHabit(name, target, category) {

    const habit = {
        id: Date.now(),
        name: name,
        category: category,
        target: Number(target),
        streak: 0,
        doneToday: false
    };

    habits.push(habit);

    renderHabits();
    updateSummary();
}


function renderHabits() {

    const habitList = document.getElementById("habitList");

    habitList.innerHTML = "";

    habits.forEach(habit => {

        const li = document.createElement("li");

        li.innerHTML = `
            <input type="checkbox"
                   class="habit-checkbox"
                   data-id="${habit.id}"
                   ${habit.doneToday ? "checked" : ""}>

            ${habit.name} | ${habit.category} | Target: ${habit.target}

            <button class="delete-btn"
                    data-id="${habit.id}">
                Delete
            </button>
        `;

        habitList.appendChild(li);
    });
}

function updateSummary() {

    const summary = document.getElementById("summary");

    const completed = habits.filter(
        habit => habit.doneToday
    ).length;

    summary.textContent =
        `Completed ${completed} out of ${habits.length} habits`;
}


function deleteHabit(id) {

    habits = habits.filter(
        habit => habit.id !== id
    );

    renderHabits();
    updateSummary();
}

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("fname").value;
    const target = document.getElementById("target").value;
    const category = document.getElementById("category").value;

    if (validateForm(name, target, category)) {

        addHabit(name, target, category);

        form.reset();
    }
});

document.addEventListener("change", function(event) {

    if (event.target.classList.contains("habit-checkbox")) {

        const id = Number(event.target.dataset.id);

        const habit = habits.find(
            habit => habit.id === id
        );

        if (habit) {

            habit.doneToday = event.target.checked;

            renderHabits();
            updateSummary();
        }
    }
});

document.addEventListener("click", function(event) {

    if (event.target.classList.contains("delete-btn")) {

        const id = Number(event.target.dataset.id);

        deleteHabit(id);
    }
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    console.log("Form submitted");

    const name = document.getElementById("fname").value;

    if (name.trim() === "") {
        errorMessage.textContent = "Please enter a habit name.";
    }
});