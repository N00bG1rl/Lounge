function mapTab() {
  const tabContent = document.createElement("div");
  tabContent.classList.add('tabcontent');
  tabContent.id = "Tokyo";

  tabContent.innerHTML = `<h3>Tokyo</h3>
                          <p>Tokyo is the capital of Japan.</p>
                          <span onclick="this.parentElement.style.display='none'" class="topright">&times</span>`;

  return tabContent;
};
export default mapTab