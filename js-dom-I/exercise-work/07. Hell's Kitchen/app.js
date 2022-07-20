function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let restaurantData = [0, 0, 0, 0, 0];

      let input = JSON.parse(document.querySelector('textarea').value);
      let bestRestaurantOutput = document.querySelector('#outputs p')
      let bestWorkersOutput = document.querySelector('#workers p')

      for (let i = 0; i < input.length; i++) {
         let line = input[i];
         let restaurantName = line.split('-')[0].trim();
         let employeeNames = [];
         let salaries = [];

         for (const item of line.split('-')[1].split(', ')) {
            employeeNames.push(item.trim().split(' ')[0]);
            salaries.push(Number(item.trim().split(' ')[1]));
         }

         if (restaurantData[0] === 0) {
            restaurantData[0] = restaurantName;
            restaurantData[1] = calculateAverageSalary(salaries);
            restaurantData[2] = calculateBestSalary(salaries);
            restaurantData[3] = employeeNames;
            restaurantData[4] = salaries;
         } else if (restaurantData[0] === restaurantName) {
            restaurantData[3].push(...employeeNames);
            restaurantData[4].push(...salaries);
            restaurantData[1] = calculateAverageSalary(restaurantData[4]);
         } else {
            let averageSalary = calculateAverageSalary(salaries);
            console.log(averageSalary);
            console.log(restaurantData);
            if (restaurantData[1] < averageSalary) {
               restaurantData[0] = restaurantName;
               restaurantData[1] = calculateAverageSalary(salaries);
               restaurantData[2] = calculateBestSalary(salaries);
               restaurantData[3] = employeeNames;
               restaurantData[4] = salaries;
            }
         }
      }

      bestRestaurantOutput.textContent = `Name: ${restaurantData[0]} Average Salary: ${restaurantData[1].toFixed(2)} Best Salary: ${restaurantData[2].toFixed(2)}`;

      bestWorkersOutput.textContent = '';
      let workersWithSalary = [];

      for (let i = 0; i < restaurantData[3].length; i++) {
         workersWithSalary.push([restaurantData[3][i], Number(restaurantData[4][i])]);
      }

      workersWithSalary.sort((a, b) => {
         return b[1] - a[1];
      })

      for (let i = 0; i < workersWithSalary.length; i++) {
         bestWorkersOutput.textContent += `Name: ${workersWithSalary[i][0]} With Salary: ${workersWithSalary[i][1]} `
      }
      
      function calculateAverageSalary(salaries) {
         let sum = 0;
         for (const salary of salaries) {
            sum += salary;
         }
         sum /= salaries.length;
         return Number(sum);
      }

      function calculateBestSalary(salaries) {
         return Number(Math.max(...salaries));
      }
   }
}