const posts = [
  {
    name: 'Vincent van Gogh',
    username: 'vincey1853',
    location: 'Zundert, Netherlands',
    avatar: 'images/avatar-vangogh.jpg',
    post: 'images/post-vangogh.jpg',
    comment: 'just took a few mushrooms lol',
    likes: 21,
  },
  {
    name: 'Gustave Courbet',
    username: 'gus1819',
    location: 'Ornans, France',
    avatar: 'images/avatar-courbet.jpg',
    post: 'images/post-courbet.jpg',
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: 'Joseph Ducreux',
    username: 'jd1735',
    location: 'Paris, France',
    avatar: 'images/avatar-ducreux.jpg',
    post: 'images/post-ducreux.jpg',
    comment:
      'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
    likes: 152,
  },
]

let render = ''
const renderPost = document.getElementById('render-post')
for (let post of posts) {
  render += `
  <div class="container">
  <div class="avatar-header">
    <img src="${post.avatar}" class="avatars" alt="" />
    <div>
      <p class="avatar-name text-bold">${post.name}</p>
      <p class="avatar-name">${post.location}</p>
    </div>
  </div>
  <img
    src="${post.post}"
    class="img-post"
    alt="${post.name}'s post"
  />
  <div class="icon-list">
    <img src="images/icon-heart.png" class="icon" alt="like-button" />
    <img src="images/icon-comment.png" class="icon" alt="comment-btn" />
    <img src="images/icon-dm.png" class="icon" alt="dm-button" />
  </div>
  <p class="text-bold">${post.likes} likes</p>
  <p>
    <span class="text-bold">${post.username}</span> ${post.comment}
  </p>
</div>
`
}

renderPost.innerHTML = render
