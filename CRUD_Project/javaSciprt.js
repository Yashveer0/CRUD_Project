const addbtn = document.getElementById("add_btn");

addbtn.addEventListener('click', addChapter);

let parentList = document.getElementById('parentList');

function addChapter (e) {
  if(parentList.children[0].className == "emptyMsg") {
    parentList.children[0].remove()
  }
  let currbtn = e.currentTarget;
  let currinput = currbtn.previousElementSibling;
  let chapterName = currinput.value;

  let newLi = document.createElement('li');
  // newLi.classList.add('list-group-item');
  newLi.className = "list-group-item d-flex justify-content-between";


  newLi.innerHTML = `<h5 class="flex-grow-1 ">${chapterName}</h5>
  <button class="btn btn-warning mx-3">Edit</button>
  <button class="btn btn-danger" onclick="removeChapter(this)">Remove</button>`

  
parentList.appendChild(newLi);

}

function removeChapter (element) {
 element.parentElement.remove()
 let parentList = document.getElementById('parentList');
 if(parentList.children.length <=0) {
  let newEmptMsg = document.createElement("h5")
  newEmptMsg.classList.add("emptyMsg")
  newEmptMsg.textContent = "Nathing is here...Plase and the Chapter"
  parentList.appendChild(newEmptMsg)
 }
} 

function editChapter (currElement) {
  if(currElement.textContent == "Done") {

    currElement.textContent = "Edit"
    let currChapterName = currElement.previousElementSibling.value;
    let currheading = document.createElement('h5');
    currheading.className = "flex-grow-1"
    currheading.textContent = currChapterName

    currElement.parentElement.replaceChild(currheading, currElement.previousElementSibling)



  }else {
    currElement.textContent = "Done"
    let currChapterName = currElement.previousElementSibling.textContent;
    let currInput = document.createElement('input');
    currInput.type = "text"
    currInput.className = "form-control"
    currInput.placeholder = "Chapter Name"
   currInput.value = currChapterName

    currElement.parentElement.replaceChild(currInput, currElement.previousElementSibling)

  }


}
