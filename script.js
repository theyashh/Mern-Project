document.getElementById('post-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the input values
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Create a new post element
    const post = document.createElement('div');
    post.classList.add('post');

    const postTitle = document.createElement('h3');
    postTitle.innerText = title;
    post.appendChild(postTitle);

    const postContent = document.createElement('p');
    postContent.innerText = content;
    post.appendChild(postContent);

    // Add the post to the post list
    document.getElementById('post-list').appendChild(post);

    // Clear the form
    document.getElementById('post-form').reset();
});
