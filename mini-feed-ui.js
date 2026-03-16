let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector(".post-feed > ul");

button.addEventListener("click", (e) => {
  e.preventDefault();

  const content = input.value.trim();

  if (content !== "") {
    createPost("userN", content);
    console.log(id);
    // create row container
    let rowContainer = document.createElement("div");
    rowContainer.classList.add("row-container");
    // give li elements content value of input
    let li = document.createElement("li");
    li.textContent = `${content}`;
    // give span elements id value
    let idSpan = document.createElement("span");
    idSpan.textContent = id;
    // give span element userN value
    idSpan.classList.add("post");
    rowContainer.appendChild(idSpan);
    rowContainer.appendChild(li);
    ul.appendChild(rowContainer);
    input.value = "";
  }
});
