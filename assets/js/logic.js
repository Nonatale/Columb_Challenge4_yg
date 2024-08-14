// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const body = document.body;
const toggleButton = document.querySelector("#toggle");
const icon = document.createElement("i");

// Icon for light/dark mode toggle
toggleButton.appendChild(icon);

let mode = localStorage.getItem("mode");

// Sets mode to inital value based on local user data
if (mode !== "dark") {
  setLight();
} else {
  setDark();
}

// Toggles light/dark mode on button click
toggleButton.addEventListener("click", function(event) {
  if (mode === "light") {
    mode = "dark";
    setDark();
    setMode("dark");
  } else {
    mode = "light";
    setLight();
    setMode("light");
  }
});

function setLight() {
  icon.innerHTML = "&#9728;";
  body.classList.remove("dark");
  body.classList.add("light");
}

function setDark() {
  icon.innerHTML = "&#9790;";
  body.classList.remove("light");
  body.classList.add("dark");
}

// Saves mode information to local storage
function setMode(mode) {
  localStorage.setItem("mode", mode)
}

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  const blogCollection = JSON.parse(localStorage.getItem("blogCollection"));
  if (!blogCollection) {
    return [];
  } else {
    return blogCollection;
  }
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.

function storeLocalStorage(blog) {
  let blogCollection = JSON.parse(localStorage.getItem("blogCollection"));
  if (!blogCollection) {
    blogCollection = [];
  }
  blogCollection.push(blog);
  localStorage.setItem(JSON.stringify(blogCollection));
}

// ! Use the following function whenever you need to redirect to a different page
let url = "";

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};


