function getUser(id, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users/${id}");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    if (xhr.status === 200) {
      try {
        const user = JSON.parse(xhr.responseText);
        callback(null, user);
      } catch (e) {
        callback(e);
      }
    } else {
      callback(new Error("Request failed: ${xhr.status}"));
    }
  };
  xhr.onerror = function () {
    callback(new Error("Network error"));
  };
  xhr.send();
}

function getPosts(userId, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://jsonplaceholder.typicode.com/posts?userId=${userId}"
  );
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    if (xhr.status === 200) {
      try {
        const posts = JSON.parse(xhr.responseText);
        callback(null, posts);
      } catch (e) {
        callback(e);
      }
    } else {
      callback(new Error("Request failed:  ${xhr.status}"));
    }
  };
  xhr.onerror = function () {
    callback(new Error("Network error"));
  };
  xhr.send();
}

function getComments(postId, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://jsonplaceholder.typicode.com/comments?postId=${postId}"
  );
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    if (xhr.status === 200) {
      try {
        const comments = JSON.parse(xhr.responseText);
        callback(null, comments);
      } catch (e) {
        callback(e);
      }
    } else {
      callback(new Error("Request failed: ${xhr.status}"));
    }
  };
  xhr.onerror = function () {
    callback(new Error("Network error"));
  };
  xhr.send();
}

getUser(1, function (err, user) {
  if (err) {
    console.error("Error getting user:", err);
    return;
  }
  console.log("User:", user.name);

  getPosts(user.id, function (err, posts) {
    if (err) {
      console.error("Error getting posts:", err);
      return;
    }
    if (posts.length === 0) {
      console.log("No posts found.");
      return;
    }
    const firstPost = posts[0];
    console.log("First post title:", firstPost.title);

    getComments(firstPost.id, function (err, comments) {
      if (err) {
        console.error("Error getting comments:", err);
        return;
      }
      console.log("Comments for post ", firstPost.title, ":");
      comments.forEach((comment) =>
        console.log("-", comment.name, ":", comment.body)
      );
    });
  });
});
