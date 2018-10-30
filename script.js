document.addEventListener("DOMContentLoaded", () => {
  check();
  const textarea = document.querySelector(".app-form textarea");
  const addTask = document.querySelector(".add-task");
  const taskContainer = document.querySelector(".app-todo-list");
  const taskSearch = document.querySelector(".task-search");
  let textareaValue = null;

  textarea.addEventListener("input", e => {
    textareaValue = e.target.value;
  });

  addTask.addEventListener("click", e => {
    e.preventDefault();
    if (textareaValue !== null) {
      createTask(textareaValue);
      textarea.value = "";
    }
  });
  function createTask(textareaValue) {
    const taskContainer = document.querySelector(".app-todo-list");
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    const taskItemContent = document.createElement("div");
    taskItemContent.classList.add("task-item-content");
    taskItemContent.innerText = textareaValue;
    const taskItemDelete = document.createElement("div");
    taskItemDelete.classList.add("task-item-delete");
    taskItemDelete.innerHTML = '<i class="fas fa-trash-alt"></i>';
    taskContainer.appendChild(taskItem);
    taskItem.appendChild(taskItemContent);
    taskItem.appendChild(taskItemDelete);

    check();
  }

  taskContainer.addEventListener("click", e => {
    if (e.target.closest(".task-item-delete") !== null) {
      e.target.closest(".task-item").remove();
    }
    check();
  });

  taskSearch.addEventListener("input", () => {
    const val = this.value;
    const elems = taskContainer.querySelectorAll(".task-item");

    [].forEach.call(elems, el => {
      const text = el.querySelector(".task-item-content").innerText;

      if (text.indexOf(val) != -1) {
        el.style.setProperty("display", " ");
      } else {
        el.style.setProperty("display", "none");
      }
    });
  });

  function check() {
    const elem = document.querySelectorAll(".task-item");
    const todoLenghtContainer = document.querySelector(".todo-lenght");
    todoLenghtContainer.innerHTML = `(${elem.length}) `;
  }
});
