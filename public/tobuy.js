let sectionHomeEmpty = document.getElementById('section-home-empty')
let ulContainer = document.getElementById('ul-container')
let sectionPopupForm = document.getElementById('section-popup-form')
let sectionList = document.getElementById('section-list')
let sectionDetail = document.getElementById('section-detail')
let toBuyForm = document.getElementById('buy-form')

let btnAdd = document.getElementById('btn-add').addEventListener('click', function() {
    sectionHomeEmpty.style.display = 'none';
    sectionPopupForm.style.display = 'block';
})

// let btnDetail = document.getElementById("btn-detail").addEventListener('click', function() {
//     console.log('pinch')
//     // sectionList.style.display = 'none'
//     // sectionDetail.style.display = 'block'
//   })

let addBtnForm = document
  .getElementById("add-btn-form")
  .addEventListener("click", function () {
      sectionPopupForm.style.display = 'none'
      sectionHomeEmpty.style.display = 'none'
      sectionList.style.display = 'block';
      let entry = 'soy tu padre'
      let model = `<li class="list-group-item " aria-current="true">
      <span class="span-icon">🛒</span>
      <h4>${entry}</h4>
      <button class="btn btn-list"><span>▶</span></button>
    </li>`
      ulContainer.innerHTML += model

      let btnDetail = document.getElementById("btn-detail").addEventListener('click', function() {
        sectionList.style.display = 'none'
        sectionDetail.style.display = 'block'
      })
  });

toBuyForm.addEventListener('submit', function(e){
  e.preventDefault()
  let title = document.getElementById('formTitle').value
  let type = document.getElementById('formType').value
  let Description = document.getElementById('formDescription').value

  let item = ``

})
  