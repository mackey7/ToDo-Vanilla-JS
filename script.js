
document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.querySelector('.app-form textarea');
    const addTask = document.querySelector('.add-task');
    const taskContainer = document.querySelector('.app-todo-list');
    const taskSearch = document.querySelector('.task-search');
    let textareaValue = null;


    textarea.addEventListener('change', function (event) {
        textareaValue = event.target.value
        textarea.value = '';
    });

    addTask.addEventListener('click', function (event) {
        event.preventDefault();
        createTask(textareaValue);

    });
    function createTask(textareaValue) {
        const taskContainer = document.querySelector('.app-todo-list');
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        const taskItemContent = document.createElement('div');
        taskItemContent.classList.add('task-item-content');
        taskItemContent.innerText = textareaValue;
        const taskItemDelete = document.createElement('button');
        taskItemDelete.classList.add('task-item-delete');
        taskItemDelete.innerText = 'Delete'
        taskContainer.appendChild(taskItem);
        taskItem.appendChild(taskItemContent);
        taskItem.appendChild(taskItemDelete);

    };


    taskContainer.addEventListener('click', function (event) {
        if (event.target.closest('.task-item-delete') !== null) {
            event.target.closest('.task-item').remove();
        }


    });
    taskSearch.addEventListener('input', function () {
        const val = this.value;
        const elems = taskContainer.querySelector('.task-item');

        [].forEach.call(elems, function (el) {
            const text = el.querySelector('.task-item-content').innerText;
            if (text.indexOf(val) !== -1) {
                el.style.setProperty('display', '');
            } else {
                el.style.setProperty('display', 'none');
            }

        });
    });


})