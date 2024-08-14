// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const main = document.querySelector("main");
const backButton = document.querySelector("#backButton");

// TODO: Create a function that builds an element and appends it to the DOM
function newElement(blog) {
    // Create the html elements
    const article = document.createElement("article");
    const heading = document.createElement("h2");
    const content = document.createElement("blockquote");
    const author = document.createElement("p");
    const main = document.querySelector("main");
    // Set the elements to their right containers
    article.appendChild(heading);
    article.appendChild(content);
    article.appendChild(author);
    main.appendChild(article);
    // Set the values to the html elements
    heading.textContent = blog.title;
    content.textContent = blog.content;
    author.textContent = blog.username;
}

// TODO: Create a function that handles the case where there are no blog posts to display
function noBlogDisplay() {
    const noBlogNote = document.createElement("h2");
    const main = document.querySelector("main");
    main.appendChild(noBlogNote);
    noBlogNote.textContent = "No Blog posts yet...";
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    const blogCollection = readLocalStorage()
    if (blogCollection.length === 0) {
        noBlogDisplay();
    } else {
        for (const blog of blogCollection) {
            newElement(blog);
        }
    }
}
// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

backButton.addEventListener("click", function(event) {
    redirectPage("./index.html");
})