import promo from './promo.jpg';
function tabOne() {
  const tabContent = document.createElement("div");
  tabContent.classList.add('tabcontent');
  tabContent.id = "Events";

  tabContent.innerHTML = `<span onclick="this.parentElement.style.display='none'" class="topright">&times</span>
                          <h1>Upcoming Events</h1>
                          <h3>Friday, 23 June - Moon Party</h3>
                          <p>DJ Anabella</p>`;
  var myIcon = new Image();
  myIcon.src = promo;                     
  tabContent.appendChild(myIcon);

  return tabContent;
};
export default tabOne