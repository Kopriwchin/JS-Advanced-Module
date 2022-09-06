class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        let isValid = this.employeeValidation(name, salary, position, department);

        if (isValid) {
            if (!Object.keys(this.departments).includes(department)) {
                this.departments[department] = [];               
            }  
            this.departments[department].push([name, salary, position]);
            return `New employee is hired. Name: ${name}. Position: ${position}`
        }
    }

    bestDepartment() {
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
        }
        
        let bestDep = this.departments[bestDepartmentArr[0]];

        let res = `Best Department is: ${bestDepartmentArr[0]}\nAverage salary: ${bestDepartmentArr[1].toFixed(2)}\n`;

        bestDep.sort((a, b) => {
            return a[0].localeCompare(b[0]);
        }).sort((a, b) => {
            return b[1] - a[1];
        }).forEach(x => {
            res += `${x[0]} ${x[1]} ${x[2]}\n`;
        });
        return res.trim();
    }

    employeeValidation(name, salary, position, department) {
        if ((!name) || (!salary) || salary < 0 || (!position) || (!department)
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