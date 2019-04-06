function menuTab() {
  const tabContent = document.createElement("div");
  tabContent.classList.add('tabcontent');
  tabContent.id = "Paris";

  tabContent.innerHTML = `<h3>Paris</h3>
                          <p>Paris is the capital of France.</p>
                          <span onclick="this.parentElement.style.display='none'" class="topright">&times</span>`;

  return tabContent;
};
export default menuTab