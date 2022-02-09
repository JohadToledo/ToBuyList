let sectionHomeEmpty = document.getElementById("section-home-empty");
let sectionHome = document.getElementById("section-home");
let ulContainer = document.getElementById("ul-container");
let sectionPopupForm = document.getElementById("section-popup-form");
let sectionList = document.getElementById("section-list");
let sectionDetail = document.getElementById("section-detail");
let toBuyForm = document.getElementById("buy-form");
let btnAdd = document.getElementById("btn-add")
let prod = document.getElementById("item")

btnAdd.addEventListener("click", function () {
    sectionHomeEmpty.style.display = "none";
    sectionPopupForm.style.display = "block"
    sectionList.style.display = "none"
    btnAdd.style.display = "flex"
    ;
  });

  // let btnDetail = document
  //   .getElementById("moreDetails").addEventListener("click", function () {
  //     sectionHomeEmpty.style.display = "none";
  //     sectionPopupForm.style.display = "none"
  //     sectionList.style.display = "none";
  //     sectionDetail.style.display = "flex";
  //   });
  function back(){
    sectionHomeEmpty.style.display = "none";
    sectionPopupForm.style.display = "none"
    sectionDetail.style.display = "none";
    sectionList.style.display = "flex"
    btnAdd.style.display = "flex"

  }

  function btnDetail(title, type, description){
    console.log(title)
    let newItem = `<div class="container ">
                  <div class="row">
                    <div class="card-detail">
                    <h6>${type}</h6>
                      <h5>${title}</h5>
                      <p>${description}</>
                      <button class="btn btn-list" onclick='back()'>Back</button>
                    </div>
                  </div>
                </div>`

    prod.innerHTML = newItem;
    
    sectionHomeEmpty.style.display = "none";
    sectionPopupForm.style.display = "none"
    sectionList.style.display = "none"
    sectionHome.style.display = "none"
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
    <h6>${type}</h6>
    <h5>${title}</h5>
    <button class=btn-list onClick="btnDetail('${title}', '${type}', '${description}')">➡</button>
    </div>`;
    ulContainer.innerHTML += item;
    
    sectionPopupForm.style.display = "none";
    sectionHomeEmpty.style.display = "none";
    sectionList.style.display = "flex";
    
    toBuyForm.reset()
    
    
  
  });
  
  



// toBuyForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let title = document.getElementById("formTitle").value;
//   let type = document.getElementById("formType").value;
//   let Description = document.getElementById("formDescription").value;

//   let item = `<div class="container">
//   <div class="row">
//     <div class="card">
//       <h5>${title}</h5>
//       <h6>${type}</h6>
//       <p>%{desciption}</>
//     </div>
//   </div>
// </div>`;

//   document.getElementById("list").innerHTML += item;
// });
