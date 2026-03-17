// 1. STATE & DATA (The "Sim" logic)
let id = 0;
const feed = [];

const createPost = (userName, content) => {
  id++;
  const post = {
    id: id,
    userN: userName,
    content: content,
    likes: 0,
    timestamp: Date.now(),
  };
  feed.push(post);
  return post; // Return the post so the UI knows it was successful
};

// 2. UI ELEMENTS (The "DOM" interaction)
const inputField = document.querySelector(".post-text");
const userNameField = document.querySelector(".userName");
const postButton = document.querySelector("button");
const feedList = document.querySelector(".post-feed > ul");

// 3. THE RENDERER (Connecting Logic to UI)
const renderFeed = () => {
  // Clear the current list to prevent duplicates
  feedList.innerHTML = "";

  // Rebuild the UI based on the current state of the feed array
  feed.forEach((post) => {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("row-container");

    rowContainer.innerHTML = `
            <span class="post-id">${post.id}</span>
            <span class="user-name">${post.userN}</span>
            <li class="content">${post.content}</li>
        `;

    feedList.appendChild(rowContainer);
  });
};

// 4. THE CONTROLLER (The Event Listener)
postButton.addEventListener("click", (e) => {
  e.preventDefault();

  const userValue = userNameField.value.trim();
  const contentValue = inputField.value.trim();

  if (userValue && contentValue) {
    // Step A: Update the Data State
    createPost(userValue, contentValue);

    // Step B: Update the UI
    renderFeed();

    // Step C: Clear the inputs
    userNameField.value = "";
    inputField.value = "";
  }
});
