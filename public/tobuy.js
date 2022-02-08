let ulContainer = document.getElementById('ul-container')

let addBtn = document
  .getElementById("add")
  .addEventListener("click", function () {
        let entry = 'soy tu padre'
        let model = `<li class="list-group-item">${entry}</li>`
        ulContainer.innerHTML += model
  });
