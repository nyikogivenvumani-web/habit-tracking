# Habit Tracker

## Overview

Habit Tracker is a simple web application that helps users create and manage daily habits. Users can add habits, set targets, categorize them, mark them as completed, and track their progress. The application uses JavaScript to dynamically update the interface without reloading the page.

## Features

* Add new habits with a name, target, and category.
* Form validation to ensure correct user input.
* Display habits in a dynamically generated list.
* Mark habits as completed using checkboxes.
* Delete habits from the list.
* View a summary of completed habits.
* Inline error messages for invalid input.
* Uses an array of objects as the single source of truth.

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

## Form Validation Rules

The application validates user input before adding a habit:

* Habit name must contain at least 3 characters.
* Target must be a whole number.
* Target must be between 1 and 7.
* A category must be selected.

If validation fails, an inline error message is displayed to the user.

## Data Structure

Each habit is stored as an object with the following properties:

```javascript
{
    id: 1,
    name: "Study",
    category: "Education",
    target: 5,
    streak: 0,
    doneToday: false
}
```

## Main Functions

### addHabit()

Creates a new habit object and adds it to the habits array.

### validateForm()

Checks user input before a habit is added.

### renderHabits()

Displays all habits stored in the array.

### updateSummary()

Shows the number of completed habits.

### deleteHabit(id)

Removes a habit from the array using its unique ID.

## Event Listeners

The project uses event listeners instead of inline HTML events:

* Form submission listener
* Checkbox change listener
* Delete button click listener

## Future Improvements

* Save habits using localStorage.
* Track habit streaks automatically.
* Add editing functionality.
* Create progress charts and statistics.
* Support weekly and monthly habit tracking.

## Author

Nyiko Given Vumani

## License

This project is for educational purposes.
