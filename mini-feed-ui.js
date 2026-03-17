let input = document.querySelector(".post-text");
let userN = document.querySelector(".userName");
let button = document.querySelector("button");
let ul = document.querySelector(".post-feed > ul");

let user = userN.value.trim();
let content = input.value.trim();

let addContentsToPost = (user, input) => {
  if (input !== "") {
    createPost(user, input);
    console.log(id);
    // create row container
    let rowContainer = document.createElement("div");
    rowContainer.classList.add("row-container");
    // give span elements id value
    let idSpan = document.createElement("span");
    idSpan.textContent = id;
    idSpan.classList.add("post");

    // give li elements content value of input
    let content = document.createElement("li");
    content.textContent = input.value;
    content.classList.add("content");
    // give span element userN value
    let userNameSpan = document.createElement("span");
    userNameSpan.textContent = user.value;
    userNameSpan.classList.add("user-name");

    rowContainer.appendChild(idSpan);
    rowContainer.appendChild(userNameSpan);
    rowContainer.appendChild(content);
    console.log(content);
    ul.appendChild(rowContainer);
    console.log(user);
    input.value = "";
    user.value = "";
  }
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  addContentsToPost(userN, input);
});
