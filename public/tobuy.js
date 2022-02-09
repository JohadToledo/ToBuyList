let homeEmpty = document.getElementById('home-empty')
let ulContainer = document.getElementById('ul-container')
let containerList = document.getElementById('container-list')






let btnAdd = document.getElementById('btn-add').addEventListener('click', function() {
      homeEmpty.style.display = 'none';
      containerList.style.display = 'block';
})






let addBtn = document
  .getElementById("add")
  .addEventListener("click", function () {
        let entry = 'soy tu padre'
        let model = `<li class="list-group-item">${entry}</li>`
        ulContainer.innerHTML += model
  });
