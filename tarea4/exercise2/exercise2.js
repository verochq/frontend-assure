function getUser(id, callback) {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((res) => res.json())
  .then((data) => callback(null, data))
  .catch((err) => callback(err));
}

function getPosts(id, callback) {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  .then((res) => res.json())
  .then((data) => callback(null, data))
  .catch((err) => callback(err));
}

function getComments(id, callback) {
  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
  .then((res) => res.json())
  .then((data) => callback(null, data))
  .catch((err) => callback(err));
}

getUser(1, (err, user) => {
  if (err) console.log(err);
  console.log("User: ", user);
  const user_name = document.querySelector(".user");
  user_name.innerHTML = `Nombre del usuario:  ${user.name}`;
  getPosts(user.id, (err, posts) => {
      if (err) console.log(err);
      console.log("Posts: ", posts);
      const user_posts = document.querySelector(".user_posts");
      user_posts.innerHTML = `Cantidad de posts:  ${posts.length}`;
      
      getComments(posts[0].id, (err, comments) => {
      if (err) console.log(err);
      console.log("Comments Post: ", comments);    
      const user_comments = document.querySelector(".user_comments");
      user_comments.innerHTML = `Cantidad de comentarios en el primer post:  ${comments.length}`;
      });
  });
});

