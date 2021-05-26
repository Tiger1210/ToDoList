/ We create our buttons
const addButton = document.getElementById('task');
const input = document.getElementById('taskAdder');
const list = document.getElementById('default'); 

// We create eventlisteners
addButton.addEventListener('click', addToList);
list.addEventListener('click', deleteItem);
input.addEventListener("keyup", enterCheck);




// We will create the necessary functions
function addToList(event) {
  event.preventDefault();
  // We will create a div to hold the todo item and the button
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  // We will create the li to hold the todo item
  const item = document.createElement('li');
  item.classList.add('todo-item');
  if ((input.value === '') || (start.value === '') || (end.value === '')) {
    alert("Please enter a task with start and end times. You cannot leave anything blank!");
  } else {
    item.innerText = "Task: " + input.value;
    // We will create a list for teh start and end times
    const times = document.createElement('ul');
    times.classList.add("start-end");

    const startTime = document.createElement('li');
    startTime.classList.add("startTime");

    // We will call the change() method to shift the time to a 12 hr clock system
    startTime.innerText = "Start: " + change(start.value);

    const endTime = document.createElement('li');
    endTime.classList.add("endTime");

    // We will call the change() method to shift the time to a 12 hr clock system
    endTime.innerText = "End: " + change(end.value);

    // We will put the start and end times into the ul
    times.appendChild(startTime);
    times.appendChild(endTime);

    // We will add these times into the list holding the task
    item.appendChild(times);

    // We will put the li inside of the div
    todoDiv.appendChild(item);
    // We will create the complete button
    const complete = document.createElement("button");
    complete.innerHTML = '<i class= "fas fa-check"> Complete</i>'
    complete.classList.add("complete");
    todoDiv.appendChild(complete);

    // We will create the complete button
    const remove = document.createElement("button");
    remove.innerHTML = '<i class="fas fa-trash"> Delete</i>';
    remove.classList.add("remove");
    todoDiv.appendChild(remove);

    // We will append todoDiv to the constant 'list'
    list.appendChild(todoDiv);

    // We will clear out the bars
    input.value = "";
    start.value = "";
    end.value = "";
  }
}

function deleteItem(e) {
  // We will save the target of the click in a constant
  const target = e.target;
  // If the user pressed delete, we will delete the entry
  if (target.classList[0] === "remove") {
    const parent = (target.parentElement);
    // We will remove the entry
    parent.remove();
  }

  // If the user pressed complete, we will shade out the entry in CSS
  if (target.classList[0] === "complete") {
    (target.parentElement).classList.toggle('done');
  }

}

function enterCheck(e) {
  if (e.key == "Enter") {
    addToList(e);
  }
}

function change(time){
  var finalTime;
  var am_pm;
  var hours = parseInt(time.substring(0,2));
  if(hours > 12){
    hours = hours - 12
    am_pm = "PM"
    finalTime = hours + time.substring(2,time.length) + " " + am_pm;
  } else if(hours < 12){
    am_pm = "AM"
    finalTime = hours + time.substring(2,time.length) + " " + am_pm;
  } else{
    am_pm = "PM"
    finalTime = hours + time.substring(2,time.length) + " " + am_pm;
  }

  if(hours == 0){
    hours = 12;
    finalTime = hours + time.substring(2,time.length) + " " + am_pm;
}
  return finalTime;
}












