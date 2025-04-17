const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const openSidebarBtn = document.getElementById("openSidebar");
const closeSidebarBtn = document.getElementById("closeSidebar");
openSidebarBtn.addEventListener("click", function () {
  sidebar.classList.remove("translate-x-full");
  overlay.classList.remove("hidden");
});
function closeSidebar() {
  sidebar.classList.add("translate-x-full");
  overlay.classList.add("hidden");
}
closeSidebarBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);