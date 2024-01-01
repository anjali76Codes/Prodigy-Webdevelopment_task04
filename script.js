function toggleContent(elementId) {
  var content = document.getElementById(elementId);
  content.style.display =
    content.style.display === "none" || content.style.display === ""
      ? "block"
      : "none";
}

function toggleFunction() {
  const navItems = document.querySelector(".nav-items");
  navItems.style.display = navItems.style.display === "flex" ? "none" : "flex";
}

