// 1. Función que devuelve una Promise para obtener un usuario
function getUser(id) {
  return fetch("https://jsonplaceholder.typicode.com/users/${id}").then(
    (res) => {
      if (!res.ok) throw new Error("Failed to fetch user:", res.status);
      return res.json();
    }
  );
}

// 2. Función que devuelve una Promise para obtener posts de un usuario
function getUserPosts(userId) {
  return fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=${userId}"
  ).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch posts: ${res.status}");
    return res.json();
  });
}

// 3. Función que devuelve una Promise para obtener comentarios de un post
function getPostComments(postId) {
  return fetch(
    "https://jsonplaceholder.typicode.com/comments?postId=${postId}"
  ).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch comments: ${res.status}");
    return res.json();
  });
}

// 4. Función async que combina todo
async function loadUserFeed(userId) {
  try {
    // Obtener usuario
    const user = await getUser(userId);

    // Obtener posts del usuario
    const posts = await getUserPosts(userId);

    // Si no hay posts, devolver sin comentarios
    if (posts.length === 0) {
      return {
        user,
        posts: [],
        firstPostComments: [],
      };
    }

    // Obtener comentarios del primer post
    const firstPost = posts[0];
    const firstPostComments = await getPostComments(firstPost.id);

    // Devolver objeto combinado
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
loadUserFeed(1)
  .then((result) => {
    console.log("User Feed Loaded:");
    console.log("User:", result.user.name);
    console.log("Total Posts:", result.posts.length);
    console.log("Comments on first post:", result.firstPostComments.length);
    console.log(result);
  })
  .catch((err) => {
    console.error("Something went wrong:", err);
  });
