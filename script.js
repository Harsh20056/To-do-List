let input = document.querySelector("input");
let container = document.querySelector(".container");

let addBtn = document.querySelector("#add");

let tasksArr = JSON.parse(localStorage.getItem("items")) || [];
console.log(tasksArr);

const renderUi = () => {
  container.innerHTML = "";
  tasksArr.forEach((val, index) => {
    container.innerHTML += `
  <div class="list-conatiner">
        <p>${val}</p>
        <div class="btns">
          <button onclick="handleUpdate(${index})">Update</button>
          <button onclick="handleDel(${index})" id="del">Delete</button>
        </div>
      </div>`;
  });
};

renderUi();

document.querySelector('.inp-container').addEventListener("submit", (e) => {
  e.preventDefault()
  let inpValue = input.value;

  tasksArr.push(inpValue);
  localStorage.setItem("items", JSON.stringify(tasksArr));
  renderUi();

  input.value = "";
});

const handleDel = (index) => {
  tasksArr.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(tasksArr));
  renderUi();
};

const handleUpdate = (index) => {
  let updateValue = prompt("Enter new value", tasksArr[index]);
  tasksArr[index] = updateValue;
  localStorage.setItem("items", JSON.stringify(tasksArr));
  renderUi();
};

