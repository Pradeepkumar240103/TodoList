function addTask() {
    var inputTask = document.getElementById("inpt").value; // Fetching value from input
    if (inputTask == "") {
        alert("Please enter the Task");
        return;
    }

    var listitem = document.createElement("li"); // Creating a list item (li)
    listitem.innerText = inputTask; // Adding input task value to the list item
    var Tasklist = document.getElementById("tasklist"); // Getting the ul element
    Tasklist.appendChild(listitem); // Appending the li to the ul

    var buttonContainer = document.createElement("div");
    listitem.appendChild(buttonContainer); // Appending button container to the list item
    buttonContainer.className = "task-button";

    var deleteButton = document.createElement("button");
    buttonContainer.appendChild(deleteButton); // Appending delete button to the container
    deleteButton.className = "deletebtn";
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function () {
        Tasklist.removeChild(listitem); // Deleting the specific task
    };

    var completeButton = document.createElement("button");
    buttonContainer.appendChild(completeButton); // Appending complete button to the container
    completeButton.className = "completebtn";
    completeButton.innerText = "Complete";
    completeButton.onclick = function () {
        listitem.classList.toggle("completed"); // Toggling the completed class on the specific list item
    };
}
