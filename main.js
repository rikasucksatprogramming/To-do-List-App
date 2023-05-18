// Declare a variable to store your to-do list items
let todoList = [];

// Create a function to add new items to the list
function addItem() {
  // Select the input field where users can enter their to-do item
  let inputField = document.getElementById("todo-input");

  // Select the "Add" button
  let addButton = document.getElementById("add-todo-btn");

  // Add an event listener to the "Add" button that triggers when it is clicked
  addButton.addEventListener("click", function () {
    // Retrieve the value entered by the user
    let newItem = inputField.value;

    if (newItem !== "") {
      // Add the item to the list of items
      todoList.push(newItem);

      // Clear the input field after adding the item
      inputField.value = "";

      // Call the display function to update the list on the screen
      displayList();
    }
  });
}

// Create a function to display the to-do list
function displayList() {
  // Select the container element where you want to display the list
  let container = document.getElementById("todo-list-container");

  // Generate the necessary HTML dynamically to display each item in the list
  let html = "";
  for (let i = 0; i < todoList.length; i++) {
    html += `<div>${todoList[i]}</div>`;
  }

  // Append the generated HTML to the container element
  container.innerHTML = html;
}

// Call the addItem() function to enable adding items
addItem();
