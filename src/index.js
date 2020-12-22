const addButton = document.getElementById('add');
let list = document.querySelector('.list');
const productsArray = JSON.parse(sessionStorage.Products);
let totalKg = 0;
let totalAmount = 0;

function displayProducts(products) {
  const sortedByCategory = products.reduce(function (obj, v, i) {
    obj[v.category] = obj[v.category] || [];
    obj[v.category].push(v);
    return obj;

  }, {});

  Object.entries(sortedByCategory).forEach(entry => {
    const [key, values] = entry;
    const categoryHeading = document.createElement('h2');
    categoryHeading.innerText = `${key}`;
    list.append(categoryHeading);

    const table = document.createElement('table');
    table.classList.add('table');
    table.id = `${key}`;
    table.innerHTML = `    
      <thead>     
        <tr>        
          <th scope="col">Nazwa</th>
          <th scope="col">Wartość</th>
          <th scope="col">Jednostka</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      ${values.map(value => {
      return `<tr id="${value.name}">          
        <td>${value.name}</td>
        <td>${value.value}</td>
        <td>${value.unit}</td>
        <td><button type="button" class="btn btn-danger">Delete</button></td>
      </tr>`
    }).join(' ')}
      </tbody>
      </table>`
    list.append(table);
  });
}

function clearUI() {
  list.innerHTML = ``;
}

function getRadioValue() {
  const radios = Array.from(document.querySelectorAll('.radioBtn'));

  const checkedRadio = radios.filter(radio => {
    return radio.checked;
  })

  const [button] = checkedRadio;
  return button.value;
}

function addProduct() {
  const form = document.getElementsByTagName('form')[0];
  const name = document.getElementById('product').value;
  const value = parseFloat(document.getElementById('value').value);
  const unit = getRadioValue()
  const category = document.getElementById('category').value;

  productsArray.push({ name, value, unit, category });
  sessionStorage.setItem("Products", JSON.stringify(productsArray));
  form.reset();
}

function deleteProduct(element) {
  productsArray.forEach((product, index) => {
    if (product.name === element.parentElement.parentElement.id) {
      productsArray.splice(index, 1);
      sessionStorage.setItem("Products", JSON.stringify(productsArray));
    }
  });
  handleUI();
}

function displayTotal(productsArray) {
  let totalContainer = document.createElement('p');
  let totalKg = 0;
  let totalAmount = 0;
  productsArray.map(item => {
    if (item.unit === "Kg") {
      totalKg += item.value;
    } else {
      totalAmount += item.value;
    }
  });

  totalContainer.innerText = `Licznik produktów: ${totalKg}kg oraz ${totalAmount} sztuk.`;
  list.append(totalContainer);
}

displayTotal(productsArray)


addButton.addEventListener('click', () => {
  addProduct();
  handleUI();
})

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-danger')) {
    deleteProduct(e.target);
  } else {
    return;
  }
});

window.addEventListener("DOMContentLoaded", () => {
  displayProducts(productsArray);
})


function handleUI() {
  clearUI();
  displayProducts(productsArray);
  displayTotal(productsArray);
}