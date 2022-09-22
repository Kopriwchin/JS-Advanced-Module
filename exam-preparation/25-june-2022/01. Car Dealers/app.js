window.addEventListener("load", solve);

function solve() {
  let publishButton = document.getElementById('publish');
  let makeInputElement = document.getElementById('make');
  let modelInputElement = document.getElementById('model');
  let yearInputElement = document.getElementById('year');
  let fuelElement = document.getElementById('fuel');

  let originalCostInput = document.getElementById('original-cost');
  let sellingPriceInput = document.getElementById('selling-price');

  publishButton.addEventListener('click', function (e) {
    e.preventDefault();

    if (makeInputElement.value.length == 0 || modelInputElement.value.length == 0 ||
      yearInputElement.value.length == 0 || originalCostInput.value.length == 0 ||
      sellingPriceInput.value.length == 0 || (Number(originalCostInput.value) >= Number(sellingPriceInput.value))
    ) {
      return;
    }
    else {
      let tableBody = document.getElementById('table-body');
      tableBody.innerHTML +=
        `
        <tr class="row">
          <td>${makeInputElement.value}</td>
          <td>${modelInputElement.value}</td>
          <td>${yearInputElement.value}</td>
          <td>${fuelElement.value}</td>
          <td>${originalCostInput.value}</td>
          <td>${sellingPriceInput.value}</td>
          <td>
            <button class="action-btn edit">Edit</button>
            <button class="action-btn sell">Sell</button>
          </td>
        </tr>`;
        console.log(document.querySelectorAll('#table-body > tr > td > button[class="action-btn edit"]'));
        clearInputs()
    };
  });

  document.querySelectorAll('#table-body > tr > td > button[class="action-btn edit"]').forEach(x => x.addEventListener('click', function(e) {
    console.log(555)
  }));

  function clearInputs() {
    makeInputElement.value = '';
    modelInputElement.value = '';
    yearInputElement.value = '';
    fuelElement.value = '';
    originalCostInput.value = '';
    sellingPriceInput.value = '';
  }
}