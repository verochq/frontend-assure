function getUser(id) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then(response => response.json())
  .catch(error => {console.log("Error ", error)});
}

function getUserPosts(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(
    (res) => {
      if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`);
      return res.json();
    }
  );
}

function getPostComments(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).then(
    (res) => {
      if (!res.ok) throw new Error(`Failed to fetch comments: ${res.status}`);
      return res.json();
    }
  );
}

async function loadUserFeed(userId) {
  try {
    const user = await getUser(userId);
    const posts = await getUserPosts(userId);
    
    if (posts.length === 0) {
      return {
        user,
        posts: [],
        firstPostComments: [],
      };
    }

    const firstPost = posts[0];
    const firstPostComments = await getPostComments(firstPost.id);
    return {
      user,
      posts,
      firstPostComments,
    };
  } catch (error) {
    console.error("Error loading user feed:", error.message);
    throw error;
  }
}

loadUserFeed(5)
  .then((result) => {
    const user_name = document.querySelector(".user");
    const user_posts = document.querySelector(".user_posts");
    const user_comments = document.querySelector(".user_comments");
    user_name.innerHTML = `Nombre del usuario:  ${result.user.name}`;
    user_posts.innerHTML = `Cantidad de posts:  ${result.posts.length}`;
    user_comments.innerHTML = `Cantidad de comentarios en el primer post:  ${result.firstPostComments.length}`;

    console.log("Feed loaded:");
    console.log(result);
  }).catch((e) => {
    console.error("Something went wrong:", e);
  });