class EmployeeCard {
    #parent = null;
    #el = null;

    constructor(parentSelector, firstName, lastName, occupation) {
        // TODO: validate input data
        this.firstName = firstName;
        this.lastName = lastName;
        this.occupation = occupation;

        this.#el = document.createElement('div');
        this.#parent = document.querySelector(parentSelector);

        this.#parent.appendChild(this.#el);

        this.#init();
        this.render();
    }

    #init() {
        this.#el.addEventListener('click', (e) => {
            e.currentTarget.style.transform = 'scale(1.2)';
        })
    }

    getContent() {
        return `
        <div class="card">
            <img src="img_avatar.png" alt="Avatar" style="width:100%">
            <div class="container">
                <h4><b>${this.firstName} ${this.lastName}</b></h4>
                <p>Architect & Engineer</p>
            </div>
        </div>
        `;
    }

    render() {
        // Warning XSS Attack
        this.#el.innerHTML = this.getContent();
    }
}