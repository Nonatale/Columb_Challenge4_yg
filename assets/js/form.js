// TODO: Create a variable that selects the form element
const entry = document.querySelector("#submitButton");
const errorMsg = document.querySelector("#error");
const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function submitForm(event) {
    event.preventDefault();

    const blogPost = {
        username: usernameInput.value.trim(),
        title: titleInput.value.trim(),
        content: contentInput.value.trim()
    }

    if (!blogPost.username || !blogPost.title || !blogPost.content) {
        errorMsg.textContent = "Please complete the form.";
    } else {
        let blogCollection = JSON.parse(localStorage.getItem("blogCollection"));
        if (!blogCollection) {
            blogCollection = [];
        }
        blogCollection.push(blogPost);
        localStorage.setItem("blogCollection", JSON.stringify(blogCollection));
        redirectPage("./blog.html");
    }
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
entry.addEventListener("click", submitForm);
