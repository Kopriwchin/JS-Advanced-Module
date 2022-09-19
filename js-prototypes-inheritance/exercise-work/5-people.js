function solution() {
    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = Number(age);
            this.salary = 0;
            this.tasks = [];
            this.taskCount = 0;
        }
    
        work() {
            if (this.taskCount == this.tasks.length) {
                this.taskCount = 0;
            }
            console.log(this.tasks[this.taskCount]);
            this.taskCount++;
        }
    
        collectSalary() {
            if (this.dividend) {
                console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
                return;
            }
            console.log(`${this.name} received ${this.salary} this month.`);
        }
    }
    
    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [`${this.name} is working on a simple task.`];
        }
    }
    
    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [
                `${this.name} is working on a complicated task.`,
                `${this.name} is taking time off work.`,
                `${this.name} is supervising junior workers.`,
            ];
        }
    }
    
    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks = [
                `${this.name} scheduled a meeting.`,
                `${this.name} is preparing a quarterly report.`,
            ]
        }
    }

    return {Employee, Junior, Senior, Manager}
}



const junior = new Junior('Ivan',25); 
 
junior.work();  
junior.work();  
 
junior.salary = 5811; 
junior.collectSalary();  
 
const senior = new Senior('Alex', 31); 
 
senior.work();  
senior.work();  
senior.work();  
senior.work();  
 
senior.salary = 12050; 
senior.collectSalary();  
 
const manager = new Manager('Tom', 55); 
 
manager.salary = 15000; 
manager.collectSalary();  
manager.dividend = 2500; 
manager.collectSalary();  

