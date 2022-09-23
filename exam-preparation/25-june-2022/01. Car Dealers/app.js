window.addEventListener("load", solve);

function solve() {
  let publishButton = document.getElementById('publish');

  let makeInputElement = document.getElementById('make');
  let modelInputElement = document.getElementById('model');
  let yearInputElement = document.getElementById('year');
  let fuelElement = document.getElementById('fuel');
  let originalCostInput = document.getElementById('original-cost');
  let sellingPriceInput = document.getElementById('selling-price');
  let tableBody = document.getElementById('table-body');
  const soldCarsElement = document.getElementById("cars-list");
  const totalProfitElement = document.getElementById("profit");
  let profitMade = 0;

  publishButton.addEventListener('click', function (e) {
    e.preventDefault();

    if (makeInputElement.value.length == 0 || modelInputElement.value.length == 0 ||
      yearInputElement.value.length == 0 || originalCostInput.value.length == 0 ||
      sellingPriceInput.value.length == 0 || (Number(originalCostInput.value) > Number(sellingPriceInput.value))
    ) {
      return;
    }
    else {
      const tr = elGenerator('tr');
      tr.setAttribute('class', 'row');

      elGenerator('td', `${makeInputElement.value}`, tr);
      elGenerator('td', `${modelInputElement.value}`, tr);
      elGenerator('td', `${yearInputElement.value}`, tr);
      elGenerator('td', `${fuelElement.value}`, tr);
      elGenerator('td', `${originalCostInput.value}`, tr);
      elGenerator('td', `${sellingPriceInput.value}`, tr);
      const actionCell = elGenerator('td');
      tr.appendChild(actionCell);

      const editBtn = elGenerator("button", "Edit");
      editBtn.setAttribute("class", "action-btn");
      editBtn.setAttribute("id", "edit");
      actionCell.appendChild(editBtn);

      const sellBtn = elGenerator("button", "Sell");
      sellBtn.setAttribute("class", "action-btn");
      sellBtn.setAttribute("id", "sell");
      actionCell.appendChild(sellBtn);

      tableBody.appendChild(tr);

      console.log(makeInputElement.value);
      editBtn.addEventListener("click", (ev) =>
        editOffer(
          ev,
          makeInputElement.value,
          modelInputElement.value,
          yearInputElement.value,
          fuelElement.value,
          originalCostInput.value,
          sellingPriceInput.value
        )
      );

      sellBtn.addEventListener("click", (ev) =>
        sellCar(
          ev,
          makeInputEl,
          modelInputEl,
          yearInputEl,
          firstPriceInputEl,
          sellingPriceInputEl
        )
      );

      clearInputs();
    };
  });

  function editOffer(
    ev,
    _makeInputEl,
    _modelInputEl,
    _yearInputEl,
    _fuelInputEl,
    _firstPriceInputEl,
    _sellingPriceInputEl
  ) {
    ev.target.parentNode.parentNode.remove();

    makeInputElement.value = _makeInputEl;
    modelInputElement.value = _modelInputEl;
    yearInputElement.value = _yearInputEl;
    fuelElement.value = _fuelInputEl;
    originalCostInput.value = _firstPriceInputEl;
    sellingPriceInput.value = _sellingPriceInputEl;
  }

  function clearInputs() {
    makeInputElement.value = '';
    modelInputElement.value = '';
    yearInputElement.value = '';
    fuelElement.value = '';
    originalCostInput.value = '';
    sellingPriceInput.value = '';
  };

  function elGenerator(type, content, parent) {
    const element = document.createElement(type);
    element.textContent = content;

    if (parent) {
      parent.appendChild(element);
    }

    return element;
  }
}