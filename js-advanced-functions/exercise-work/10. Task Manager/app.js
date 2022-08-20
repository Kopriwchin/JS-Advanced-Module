function solve() {
    [greySection, orangeSection, yellowSection, greenSection] = document.querySelectorAll('section');

    let addButtonElement = document.getElementById('add');
    addButtonElement.addEventListener('click', addTask);

    function addTask(e) {
        e.preventDefault();

        [task, dueDate] = document.querySelectorAll('input');
        let description = document.querySelector('textarea');

        if (task.value.trim().length > 0 && description.value.trim().length > 0 && dueDate.value.trim().length > 0) {
            orangeSection.querySelectorAll('div')[1].innerHTML += 
            `
                <article>
                    <h3>${task.value}</h3>
                    <p>Description: ${description.value}</p>
                    <p>Due Date: ${dueDate.value}</p>
                    <div class="flex">
                        <button class="green">Start</button>
                        <button class="red">Delete</button>
                    </div>
                </article>
            `;

            task.value = '';
            description.value = '';
            dueDate.value = '';

            let deleteButton = document.querySelectorAll('button.red');
            deleteButton.forEach(x => {
                x.addEventListener('click', removeTask);
            });

            let startButtons = document.querySelectorAll('button.green');
            startButtons.forEach(x => {
                x.addEventListener('click', startTask);
            });
        }
    }

    function startTask(e) {
        e.preventDefault();

        let currentArticle = e.currentTarget.parentNode.parentNode;
        let h3 = currentArticle.querySelector('h3').textContent;
        let description = currentArticle.querySelectorAll('p')[0].textContent;
        let dueDate = currentArticle.querySelectorAll('p')[1].textContent;
        console.log(currentArticle);

        yellowSection.querySelectorAll('div')[1].innerHTML +=
        `
            <article>
                <h3>${h3}</h3>
                <p>${description}</p>
                <p>${dueDate}</p>
                <div class="flex">
                    <button class="red">Delete</button>
                    <button class="orange">Finish</button>
                </div>
            </article>
        `

        let deleteButton = document.querySelectorAll('button.red');
            deleteButton.forEach(x => {
                x.addEventListener('click', removeTask);
            });

        let startButtons = document.querySelectorAll('button.orange');
            startButtons.forEach(x => {
                x.addEventListener('click', finishTask);
            });

        e.currentTarget.parentNode.parentNode.remove();
    }

    function finishTask(e) {
        e.preventDefault();

        let currentArticle = e.currentTarget.parentNode.parentNode;
        let h3 = currentArticle.querySelector('h3').textContent;
        let description = currentArticle.querySelectorAll('p')[0].textContent;
        let dueDate = currentArticle.querySelectorAll('p')[1].textContent;

        greenSection.querySelectorAll('div')[1].innerHTML +=
        `
            <article>
                <h3>${h3}</h3>
                <p>${description}</p>
                <p>${dueDate}</p>
            </article>
        `

        e.currentTarget.parentNode.parentNode.remove();
    }

    function removeTask(e) {
        e.currentTarget.parentNode.parentNode.remove();
    }
}