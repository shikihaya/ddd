import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得してから初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);

  const p = document.createElement("p");
  p.innerText = text;

  if (!text) {
    return;
  }

  const li = document.createElement("li");
  // console.log(li);

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(div.parentNode);

    const addTarget = div.parentNode;
    const text = addTarget.firstElementChild.firstElementChild.innerText;
    addTarget.firstElementChild.textContent = null;
    console.log(addTarget);

    const p = document.createElement("p");
    p.innerText = text;

    const undoButton = document.createElement("button");
    undoButton.innerText = "戻す";
    undoButton.addEventListener("click", () => {
      const undoTarget = div.parentNode;
      document.getElementById("complete-list").removeChild(undoTarget);

      const text = div.firstChild.innerText;
      createIncompleteList(text);
    });

    addTarget.firstElementChild.appendChild(p);
    addTarget.firstElementChild.appendChild(undoButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });
  console.log(completeButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(div.parentNode);
  });
  console.log(deleteButton);

  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  console.log(li);

  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
