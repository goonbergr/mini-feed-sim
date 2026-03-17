let input = document.querySelector(".post-text");
let userN = document.querySelector(".userName");
let button = document.querySelector("button");
let ul = document.querySelector(".post-feed > ul");

const content = input.value.trim();
const user = userN.value.trim();

let addContentsToPost = (user, content) => {
  if (content !== "") {
    createPost(user, content);
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
    idSpan.classList.add("post");
    // give span element userN value
    let userNameSpan = document.createElement("span");

    userNameSpan.classList.add("user-name");
    rowContainer.appendChild(idSpan);
    rowContainer.appendChild(userNameSpan);
    rowContainer.appendChild(li);
    // console.log(li);
    ul.appendChild(rowContainer);
    input.value = "";
    console.log(user);
  }
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  addContentsToPost(userN, content);
});
