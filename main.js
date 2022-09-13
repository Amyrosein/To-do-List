var closeIt = document.getElementsByClassName("close");
let list = document.querySelector("#list");
// add a close button beside the list items
function close() {
  let liList = document.getElementsByTagName("LI");
  let closeBtn = document.createElement("I");
  closeBtn.classList.add("bi", "bi-x-lg", "text-danger", "fs-5", "close");
  for (let i = 0; i < liList.length; i++) {
    liList[i].appendChild(closeBtn);
  }
}

// create list and add items to it when click on ADD button
sub.addEventListener("click", function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("value").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  li.classList.add(
    "liList",
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "ps-5"
  );
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("value").value = "";

  close();
  for (let i = 0; i < closeIt.length; i++) {
    closeIt[i].addEventListener(
      "click",
      function () {
        var div = closeIt[i].parentElement;
        console.log(div);
        div.classList.add("d-none");
      },
      false
    );
  }
});

// add or remove checked class when click on li
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
