const tasksInput = document.querySelector('.tasks__input');
const tasksList = document.querySelector('.tasks__list');
const tasksAddBtn = document.querySelector('.tasks__add');

function addTask() {
  tasksList.innerHTML += `
    <div class="task">
      <div class="task__title">
        Сходить в магазин
      </div>
    <a href="#" class="task__remove">&times;</a>
    </div>
  `;
  const task = [...tasksList.querySelectorAll('.task')];
  task[task.length - 1].querySelector('.task__title').textContent = tasksInput.value;

  tasksInput.value = '';

  // const taskRemove = task[task.length - 1].querySelector('.task__remove');
  for (let i in task) {
    task[i].querySelector('.task__remove').addEventListener('click', (e) => {
      task[i].remove();
      e.preventDefault();
    });
  }
}

tasksAddBtn.addEventListener('click', (e) => {
  if (tasksInput.value.trim()) {
    addTask();
    e.preventDefault();
  }
});