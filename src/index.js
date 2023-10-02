document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log('After DOM Loaded');
  console.log(document.querySelector('div'));

  let form = document.querySelector('#create-task-form');
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      buildToDo(e.target.new_task_description.value);
      form.reset();
  });
});

function buildToDo(todo) {
  let ul = document.createElement('ul');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x';
  ul.textContent = `${todo} `;
  ul.appendChild(btn);
  console.log(ul);
  document.querySelector('#list').appendChild(ul);
}

function handleDelete(e){
  e.target.parentNode.remove();
}

  console.log('Before DOM Loads');
  console.log(document.querySelector('div')); 