function createDomElement(data) {
  var parentElement = document.getElementById('mainArea');
  let updated = 0, deleted = 0, added = 0;

  // Use querySelectorAll to get an array of child elements
  var childParent = Array.from(parentElement.querySelectorAll('div'));
  console.log(childParent)

  data.forEach(item => {
    let existingData = childParent.find(d => d.dataset.id == String(item.id));
    console.log(existingData,"existingData")
    if (existingData) {
      updated++;
      existingData.children[0].innerHTML = item.title;
      existingData.children[1].innerHTML = item.description;
      childParent = childParent.filter(elem => elem != existingData);
    } else {
      added++;
      let childElement = document.createElement('div');
      childElement.dataset.id = item.id;
      let grandChildElement1 = document.createElement('h4');
      grandChildElement1.innerHTML = item.title;
      let grandChildElement2 = document.createElement('p');
      grandChildElement2.innerHTML = item.description;

      let grandChildElement3 = document.createElement('button');
      grandChildElement3.innerHTML = "Delete";
      grandChildElement3.setAttribute("onclick", "deleteTodo(this)");

      childElement.appendChild(grandChildElement1);
      childElement.appendChild(grandChildElement2);
      childElement.appendChild(grandChildElement3);

      parentElement.appendChild(childElement);
    }
  });

  childParent.forEach(data => {
    deleted++;
    parentElement.removeChild(data);
  });

  console.log(added);
  console.log(updated);
  console.log(deleted);
}

// Corrected deleteTodo function
function deleteTodo(button) {
  // Implement the logic to delete the corresponding todo
  // You can access the parent div using button.parentNode
  let parentDiv = button.parentNode;
  parentDiv.parentNode.removeChild(parentDiv);
}

window.setInterval(() => {
  let todo = [];
  for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
    todo.push({
      title: "Gym",
      description: "mulund east",
      id: i + 1,
    });
  }
  createDomElement(todo);
}, 2000);
