class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = Number(age);
        this.salary = 0;
        this.tasks = [];
    }

    work() {

    }

    collectSalary() {

    }
}

class Junior extends Employee {
    constructor()
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

