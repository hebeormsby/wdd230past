const year = { year: "numeric" };

const date = document.lastModified;

document.querySelector("#year").textContent = new Date().toLocaleDateString(
  "en-US",
  year
);
document.querySelector("#date").textContent = date;