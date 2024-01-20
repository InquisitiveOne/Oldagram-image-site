const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// Get the container element in which you want to display posts
const postsContainer = document.getElementById("posts-container")

// Iterate over the posts array and create HTML elements
posts.forEach(post => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `
        <div class="post-top">
            <img class="post-user-avatar" src="${post.avatar}" alt="Post Image">
            <div class="post-top-content">
                <h2 class="user-name">${post.name}</h2>
                <p class="user-location">${post.location}</p>
            </div>
        </div>
        <img class="user-post-image" src="${post.post}" alt="Post Image">
        <div class="social-icon-row">
            <a href="#" class="social-button">
                <img class="social-icon" src="images/icon-heart.png" alt="Heart Icon">
            </a>
            <a href="#" class="social-button">
                <img class="social-icon" src="images/icon-comment.png" alt="Comment Icon">
            </a>
            <a href="#" class="social-button">
                <img class="social-icon" src="images/icon-dm.png" alt="Message Icon">
            </a>
        </div>
        <p class="post-likes">${post.likes} likes</p>
        <p class="post-comments"><span class="post-commenter">${post.username}</span> ${post.comment}</p>
    `;
    // Append the post element to the container
    postsContainer.appendChild(postElement);
});