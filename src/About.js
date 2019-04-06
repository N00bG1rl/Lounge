function tabFour() {
  const tabContent = document.createElement("div");
  tabContent.classList.add('tabcontent');
  tabContent.id = "Contact";

  tabContent.innerHTML = `<span onclick="this.parentElement.style.display='none'" class="topright">&times</span>
                          <h3>Contact</h3>
                          <p>Vaban Street 34, Tallinn</p>
                          <p>+372 5684 84445 | skylounge@sky.ee</p>`;
  return tabContent;
};

export default tabFour