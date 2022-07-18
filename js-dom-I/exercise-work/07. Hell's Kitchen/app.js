function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let restaurantData = [0, 0, 0, 0];

      let input = JSON.parse(document.querySelector('textarea').value);
      let bestRestaurantOutput = document.querySelector('#outputs p')
      let bestWorkersOutput = document.querySelector('#workers p')

      for (let i = 0; i < input.length; i++) {
         let line = input[i];
         let restaurantName = line.split('-')[0].trim();
         //TODO: put all employeeNames and salaries in arrays, should check average salaries and put them in the restaurantData
         let salaries = line.split('-')[1];
         console.log(salaries);
      }
   }
}