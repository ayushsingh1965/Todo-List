const todoList = [{
  name:'make dinner',
  dueDate: '2022-12-22',
}, {
    name: 'wash dishes',
    dueDate: '2022-12-22',
  }];

 renderTodoList(); // here it will display earlier list of array.

function renderTodoList(){
  let todoListHTML = '';

  for(let i=0; i<todoList.length; i++){
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
       todoList.splice(${i},1);
       renderTodoList();
      " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo(){
  const inputELement = document.querySelector('.js-name-input');
  const name = inputELement.value;

  const dateInputeELement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputeELement.value;


  todoList.push({
    name: name,
    dueDate: dueDate,
});

  inputELement.value ='';

  renderTodoList();
}