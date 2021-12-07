const postsDiv = document.getElementById("posts");
const loadingDiv = document.getElementById("loading");
const loadPostsBtn = document.getElementById("loadPostsBtn");
const loadPostsDiv = document.getElementsByClassName("loadPosts")[0];

loadPostsBtn.addEventListener("click", function () {
  loadingDiv.style.display = "block";
  loadPostsDiv.style.display = "none";
  //   server -> XMLHttpRequest -> [1, 2, 3] -> axios developer -> {data: [1,2,4,5]}
  axios("https://jsonplaceholder.typicode.com/posts").then((fetchedInfos) => {
    loadingDiv.style.display = "none";
    showPosts(fetchedInfos.data);
  });
});

// posts = [post]
// post =
// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//  }
function showPosts(posts) {
  posts.forEach((post, index) => {
    const postDiv = document.createElement("div");

    const postTitle = document.createElement("h2");
    const postBody = document.createElement("p");

    postTitle.textContent = index + 1 + ") " + post.title;
    postBody.textContent = post.body;

    postDiv.appendChild(postTitle);
    postDiv.appendChild(postBody);

    postDiv.style.cssText = `
      border: 1px solid grey;
      margin: 6px;
      padding: 6px;
    `;

    postsDiv.appendChild(postDiv);
  });
}
