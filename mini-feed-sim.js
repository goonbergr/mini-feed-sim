let id = 0;
feed = [];
let createPost = (userN, content) => {
  id++;
  let post = {
    id: id,
    userN: userN,
    content: content,
    likes: 0,
    timestamp: Date.now(),
  };
  feed.push(post);
};

let addName = (userN) => {
  return post.userN.push(userN);
};

let addContent = (content) => {
  return post.content.push(content);
};

let makePost = (userN, content) => {
  feed.push(userN + content);
};

let likePost = (id) => {
  feed.map((post) => {
    if (id === post.id) {
      post.likes++;
    }
  });
};

let getFeed = (arr) => {
  arr.forEach((element) => {
    console.log(element);
  });
};

// createPost("stuart", "goobing rn, need inspo");
// createPost("stuart", "goobering");
// createPost("stuart", "goober");
likePost(3);
likePost(3);
likePost(3);
likePost(2);
likePost(2);
likePost(1);
// console.log(feed.length);
// getFeed(feed);
let sortByLikes = (arr) => {
  return arr.toSorted((a, b) => b.likes - a.likes);
};
// console.log(sortByLikes(feed));
let sortByNewest = (arr) => {
  return arr.toSorted((a, b) => b.timestamp - a.timestamp);
};
// console.log(sortByNewest(feed));

// console.log(ul.textContent);
