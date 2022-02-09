let sectionHomeEmpty = document.getElementById("section-home-empty");
let sectionHome = document.getElementById("section-home");
let ulContainer = document.getElementById("ul-container");
let sectionPopupForm = document.getElementById("section-popup-form");
let sectionList = document.getElementById("section-list");
let sectionDetail = document.getElementById("section-detail");
let toBuyForm = document.getElementById("buy-form");
let btnAdd = document.getElementById("btn-add");
let prod = document.getElementById("item");

btnAdd.addEventListener("click", function () {
  sectionHomeEmpty.style.display = "none";
  sectionPopupForm.style.display = "block";
  sectionList.style.display = "none";
  btnAdd.style.display = "flex";
});

function back() {
  sectionHomeEmpty.style.display = "none";
  sectionPopupForm.style.display = "none";
  sectionDetail.style.display = "none";
  sectionList.style.display = "flex";
  btnAdd.style.display = "flex";
}

function btnDetail(title, type, description) {
  console.log(title);
  let newItem = `
                    <div class="card-detail">
                    <span>${type}</span>
                      <h5>${title}</h5>
                      <p>${description}<p/>
                      <button class="btn btn-close" onclick='back()'><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </svg></span></button>
                    </div>
                  `;

  prod.innerHTML = newItem;

  sectionHomeEmpty.style.display = "none";
  sectionPopupForm.style.display = "none";
  sectionList.style.display = "none";
  sectionHome.style.display = "none";
  btnAdd.style.display = "none";
  sectionDetail.style.display = "flex";
}

let addBtnForm = document
  .getElementById("add-btn-form")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let title = document.getElementById("formTitle").value;
    let type = document.getElementById("formType").value;
    let description = document.getElementById("formDescription").value;
    let item = `
    <div class="card">
    <span>${type}</span>
    <h5>${title}</h5>
    <a class=btn-list onClick="btnDetail('${title}', '${type}', '${description}')"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
  </svg></span></a>
    </div>`;
    ulContainer.innerHTML += item;

    sectionPopupForm.style.display = "none";
    sectionHome.style.display = "none";
    sectionList.style.display = "flex";

    toBuyForm.reset();
  });
