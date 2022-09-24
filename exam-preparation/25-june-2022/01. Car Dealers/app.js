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
      addOffer(
        makeInputElement.value,
        modelInputElement.value,
        yearInputElement.value,
        fuelElement.value,
        originalCostInput.value,
        sellingPriceInput.value
      );

      clearInputs();
    };
  });

  function addOffer(
    makeInputElement,
    modelInputElement,
    yearInputElement,
    fuelElement,
    originalCostInput,
    sellingPriceInput
  ) {

    const tr = elGenerator('tr');
    tr.setAttribute('class', 'row');

    elGenerator('td', `${makeInputElement}`, tr);
    elGenerator('td', `${modelInputElement}`, tr);
    elGenerator('td', `${yearInputElement}`, tr);
    elGenerator('td', `${fuelElement}`, tr);
    elGenerator('td', `${originalCostInput}`, tr);
    elGenerator('td', `${sellingPriceInput}`, tr);
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

    editBtn.addEventListener("click", (ev) =>
      editOffer(
        ev,
        makeInputElement,
        modelInputElement,
        yearInputElement,
        fuelElement,
        originalCostInput,
        sellingPriceInput
      )
    );

    sellBtn.addEventListener("click", (ev) =>
      sellCar(
        ev,
        makeInputElement,
        modelInputElement,
        yearInputElement,
        fuelElement,
        originalCostInput,
        sellingPriceInput
      )
    );
  }

  function editOffer(
    ev,
    _makeCar,
    _modelCar,
    _yearCar,
    _fuelCar,
    _firstPriceCar,
    _sellingPriceCar
  ) {
    ev.target.parentNode.parentNode.remove();

    makeInputElement.value = _makeCar;
    modelInputElement.value = _modelCar;
    yearInputElement.value = _yearCar;
    fuelElement.value = _fuelCar;
    originalCostInput.value = _firstPriceCar;
    sellingPriceInput.value = _sellingPriceCar;
  };

  function sellCar(
    ev,
    _makeCar,
    _modelCar,
    _yearCar,
    _fuelCar,
    _firstPriceCar,
    _sellingPriceCar
  ) {
    ev.target.parentNode.parentNode.remove();

    profitMade += _sellingPriceCar - _firstPriceCar;

    let soldCar = elGenerator('li');
    soldCar.className = 'each-list';

    soldCar.appendChild(elGenerator('span', `${_makeCar} ${_modelCar}`));
    soldCar.appendChild(elGenerator('span', `${_yearCar}`));
    soldCar.appendChild(elGenerator('span', `${_sellingPriceCar - _firstPriceCar}`));

    soldCarsElement.appendChild(soldCar);
    totalProfitElement.textContent = profitMade.toFixed(2);
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