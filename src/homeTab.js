function homeTab() {
  const tabContent = document.createElement("div");
  tabContent.classList.add('tabcontent');
  tabContent.id = "London";

  tabContent.innerHTML = `<h3>London</h3>
                          <p>London is the capital city of England.</p>
                          <span onclick="this.parentElement.style.display='none'" class="topright">&times</span>`;

  return tabContent;
};
export default homeTab