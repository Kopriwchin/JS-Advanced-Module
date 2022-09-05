class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        let isValid = this.employeeValidation(name, salary, position, department);

        if (isValid) {
            if (!Object.keys(this.departments).includes(department)) {
                this.departments[department] = [];
                this.departments[department].push([name, salary, position]);
            } else {
                this.departments[department].push([name, salary, position]);
            }
            
            return `New employee is hired. Name: ${name}. Position: ${position}`
        }
    }

    bestDepartment() {
        console.log(this.departments);
        let bestDepartmentArr = ['', Number.MIN_SAFE_INTEGER];

        for (const key in this.departments) {
            let avgSalary = 0;
            this.departments[key].forEach(e => {
                avgSalary += Number(e[1]);
            });
            avgSalary = Math.round(avgSalary / this.departments[key].length);

            if (avgSalary > bestDepartmentArr[1]) {
                bestDepartmentArr = [key, avgSalary];
            }
            console.log(avgSalary);
        }
        
        let bestDep = this.departments[bestDepartmentArr[0]];
        console.log(`Best Department is: ${bestDepartmentArr[0]}`);
        console.log(`Average salary: ${bestDepartmentArr[1].toFixed(2)}`);
        bestDep.forEach(x => {
            console.log(`${x.name}`);
            
        });
    }

    employeeValidation(name, salary, position, department) {
        if ((!name.length) || (!salary) || (!position.length) || (!department.length)
        ) {
            throw new Error('Invalid input!');
        } else {
            return true;
        }
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());